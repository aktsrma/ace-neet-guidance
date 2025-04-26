
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = resolve;
    document.body.appendChild(script);
  });
};

export const initializePayment = async (amount: number, plan: string, userDetails: { 
  id: string;
  email?: string;
  name?: string;
  phone?: string;
}) => {
  try {
    // First create a pending payment record
    const { data: payment, error: paymentError } = await supabase.rpc('create_payment', {
      p_user_id: userDetails.id,
      p_program_id: plan,
      p_amount: amount
    });

    if (paymentError) {
      console.error('Payment creation error:', paymentError);
      toast.error('Failed to initialize payment');
      return;
    }

    // Load Razorpay script
    await loadRazorpayScript();
    
    const options = {
      key: "rzp_test_dY8eDXCADHwgZj",
      amount: amount * 100, // Amount in smallest currency unit (paise)
      name: "NEET Mentorship",
      description: `${plan} Plan`,
      image: "/logo.svg",
      handler: async function (response: any) {
        try {
          // Update payment status with Razorpay response
          const { data: updatedPayment, error: updateError } = await supabase.rpc('update_payment_status', {
            p_payment_id: payment.id,
            p_razorpay_payment_id: response.razorpay_payment_id,
            p_razorpay_order_id: response.razorpay_order_id,
            p_status: 'completed'
          });

          if (updateError) {
            console.error('Payment update error:', updateError);
            toast.error('Payment verification failed');
            return;
          }

          toast.success('Payment successful!');
        } catch (error) {
          console.error('Payment handling error:', error);
          toast.error('Payment verification failed');
        }
      },
      prefill: {
        name: userDetails.name || '',
        email: userDetails.email || '',
        contact: userDetails.phone || ''
      },
      theme: {
        color: "#0BD9D3"
      },
      modal: {
        ondismiss: async function() {
          // Update payment status to cancelled if modal is closed
          await supabase.rpc('update_payment_status', {
            p_payment_id: payment.id,
            p_razorpay_payment_id: null,
            p_razorpay_order_id: null,
            p_status: 'cancelled'
          });
        }
      }
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  } catch (error) {
    console.error('Payment initialization error:', error);
    toast.error('Failed to initialize payment');
  }
};

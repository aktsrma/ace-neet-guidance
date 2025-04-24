
import { supabase } from "@/integrations/supabase/client";

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

export const initializePayment = async (amount: number, plan: string) => {
  await loadRazorpayScript();
  
  const options = {
    key: "rzp_test_dY8eDXCADHwgZj", // Replace with your actual publishable key
    amount: amount * 100, // Amount in smallest currency unit (paise)
    name: "NEET Mentorship",
    description: `${plan} Plan`,
    image: "/logo.svg",
    handler: async function (response: any) {
      console.log("Payment successful", response);

      // Call Supabase RPC to store payment
      const { data, error } = await supabase.rpc("create_payment", {
        p_user_id: "user_id_ya_jo_required_ho", // Replace with actual user id
        p_amount: amount,
        p_plan: plan,
        p_payment_id: response.razorpay_payment_id, // Yeh Razorpay ka payment ID hota hai
      });

      if (error) {
        console.error("Supabase error:", error.message);
      } else {
        console.log("Payment stored in DB:", data);
      }
    },
    prefill: {
      name: "",
      email: "",
      contact: ""
    },
    theme: {
      color: "#0BD9D3"
    }
  };

  const razorpayInstance = new window.Razorpay(options);
  razorpayInstance.open();
};

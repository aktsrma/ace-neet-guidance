
import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { initializePayment } from "@/utils/razorpay";
import { toast } from "sonner";
import { useAuth } from './useAuth';

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handlePayment = async (programId: string, amount: number) => {
    if (!user) {
      toast.error("Please sign in to make a payment");
      return;
    }

    setLoading(true);
    try {
      // Use rpc function with proper type assertion
      const { data: payment, error: paymentError } = await (supabase.rpc as any)(
        'create_payment',
        {
          p_user_id: user.id,
          p_program_id: programId,
          p_amount: amount
        }
      );

      if (paymentError) throw paymentError;

      // Initialize Razorpay payment
      await initializePayment(amount, `Program-${programId}`);
      
      toast.success("Payment initiated successfully");
    } catch (error) {
      toast.error("Payment initialization failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    handlePayment,
    loading,
  };
};

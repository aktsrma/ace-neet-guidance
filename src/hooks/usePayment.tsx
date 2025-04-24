
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
      // Create a payment record
      const { data: payment, error: paymentError } = await supabase
        .from('payments')
        .insert({
          user_id: user.id,
          program_id: programId,
          amount: amount,
        })
        .select()
        .single();

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

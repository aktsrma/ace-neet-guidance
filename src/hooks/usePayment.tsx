
import { useState } from 'react';
import { initializePayment } from "@/utils/razorpay";
import { toast } from "sonner";
import { useAuth } from './useAuth';
import { supabase } from "@/integrations/supabase/client";

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
      // Get user profile details for Razorpay prefill
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, phone')
        .eq('id', user.id)
        .single();

      await initializePayment(
        amount,
        programId,
        {
          id: user.id,
          email: user.email,
          name: profile?.full_name,
          phone: profile?.phone
        }
      );
    } catch (error: any) {
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

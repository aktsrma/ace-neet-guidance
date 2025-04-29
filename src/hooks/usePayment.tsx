
import { useState } from 'react';
import { toast } from "sonner";
import { useAuth } from './useAuth';
import { redirectToWhatsApp } from "@/utils/whatsapp";

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handlePayment = async (programId: string, amount: number) => {
    if (!user) {
      toast.error("Please sign in to contact via WhatsApp");
      return;
    }

    setLoading(true);
    try {
      // Redirect to WhatsApp with program details
      redirectToWhatsApp(programId, amount, `User: ${user.email}`);
    } catch (error: any) {
      toast.error("WhatsApp redirect failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    handlePayment,
    loading,
  };
};


import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type MentorshipProgram = {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
};

export const useMentorshipPrograms = () => {
  return useQuery({
    queryKey: ['mentorship-programs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('mentorship_programs')
        .select('*');

      if (error) {
        throw error;
      }

      return data as MentorshipProgram[];
    }
  });
};

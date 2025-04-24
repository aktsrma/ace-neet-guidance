
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user);
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      navigate("/dashboard");
      toast.success("Successfully signed in!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signUp = async (formData: {
    email: string;
    password: string;
    full_name: string;
    phone: string;
    target_year: number;
    previous_score?: number;
    study_hours_per_day: number;
    target_college?: string;
    weak_subjects: string[];
  }) => {
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.full_name,
          },
        },
      });
      
      if (signUpError) throw signUpError;

      const { error: profileError } = await supabase
        .from('neet_profiles')
        .update({
          phone: formData.phone,
          target_year: formData.target_year,
          previous_score: formData.previous_score,
          study_hours_per_day: formData.study_hours_per_day,
          target_college: formData.target_college,
          weak_subjects: formData.weak_subjects,
        })
        .eq('email', formData.email);

      if (profileError) throw profileError;

      toast.success("Successfully signed up! Please check your email to verify your account.");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/login");
      toast.success("Successfully signed out!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };
};

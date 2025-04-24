
-- This file needs to be executed in the Supabase SQL editor
CREATE OR REPLACE FUNCTION public.update_neet_profile(
  p_email TEXT,
  p_phone TEXT,
  p_target_year INTEGER,
  p_previous_score INTEGER,
  p_study_hours INTEGER,
  p_target_college TEXT,
  p_weak_subjects TEXT[]
) RETURNS VOID AS $$
BEGIN
  UPDATE public.neet_profiles
  SET 
    phone = p_phone,
    target_year = p_target_year,
    previous_score = p_previous_score,
    study_hours_per_day = p_study_hours,
    target_college = p_target_college,
    weak_subjects = p_weak_subjects,
    updated_at = now()
  WHERE email = p_email;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

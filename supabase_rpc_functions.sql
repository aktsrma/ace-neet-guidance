
-- Create RPC function to update NEET profiles
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

-- Create RPC function to create payments
CREATE OR REPLACE FUNCTION public.create_payment(
  p_user_id UUID,
  p_program_id UUID,
  p_amount NUMERIC
) RETURNS JSON AS $$
DECLARE
  v_result JSON;
BEGIN
  INSERT INTO public.payments (
    user_id,
    program_id,
    amount
  )
  VALUES (
    p_user_id,
    p_program_id,
    p_amount
  )
  RETURNING json_build_object(
    'id', id,
    'user_id', user_id,
    'amount', amount,
    'created_at', created_at
  ) INTO v_result;
  
  RETURN v_result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

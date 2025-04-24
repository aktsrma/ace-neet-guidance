
-- This file needs to be executed in the Supabase SQL editor
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

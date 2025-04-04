
-- Create function to set admin username in local settings for RLS
CREATE OR REPLACE FUNCTION public.set_app_admin_username(username text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  PERFORM set_config('app.admin_username', username, false);
END;
$$;

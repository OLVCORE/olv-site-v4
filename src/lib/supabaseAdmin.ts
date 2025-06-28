import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string,
  {
    auth: { persistSession: false },
  }
);

export default supabase;
export { supabase };

// When env vars are not set (e.g., during local build without secrets), supabase resolves to a dummy value.
// Any module importing it should check for null before using to prevent runtime errors during static builds. 
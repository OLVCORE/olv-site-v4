import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const srvKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase =
  url && srvKey
    ? createClient(url, srvKey, { auth: { persistSession: false } })
    : null as unknown as ReturnType<typeof createClient>;

// When env vars are not set (e.g., during local build without secrets), supabase resolves to a dummy value.
// Any module importing it should check for null before using to prevent runtime errors during static builds. 
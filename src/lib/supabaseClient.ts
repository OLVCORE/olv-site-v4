"use client";

import { createClient } from '@supabase/supabase-js';

declare const process: { env: Record<string, string | undefined> };

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
); 
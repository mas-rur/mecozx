import { createClient } from "@supabase/supabase-js";

// Public browser client - uses the anon key, which can only INSERT into
// the submission tables (see supabase/schema.sql for the RLS policies).
// Safe to ship to the client.
export function getSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase is not configured yet. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
    );
  }

  return createClient(url, anonKey);
}

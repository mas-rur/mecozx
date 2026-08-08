import "server-only";
import { createClient } from "@supabase/supabase-js";

// Server-only client using the service_role key, which bypasses Row Level
// Security. Only ever import this from Server Components, Route Handlers,
// or Server Actions that live under app/secure/admin - never from a
// client component, and never send this key to the browser.
export function getSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase admin client is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local"
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}

"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase
        .from("waitlist_signups")
        .insert({ email, source: "waitlist" });
      if (error) throw error;
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-sm text-green-400 font-semibold">
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="w-full bg-white/10 text-white placeholder-gray-500 px-4 py-3 rounded-xl mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-white transition-all"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors text-sm disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400 mt-3">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

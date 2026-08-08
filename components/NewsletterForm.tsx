"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase
        .from("waitlist_signups")
        .insert({ email, source: "newsletter" });
      if (error) throw error;
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return <p className="text-xs text-green-400 font-semibold">Subscribed - thank you.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="absolute right-2 top-2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "..." : "Join"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400 mt-2">Something went wrong.</p>
      )}
    </form>
  );
}

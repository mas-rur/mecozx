"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function InvestorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commitment, setCommitment] = useState("$10k - $50k");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase
        .from("investor_applications")
        .insert({ name, email, commitment });
      if (error) throw error;
      setStatus("done");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-black text-white rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] h-full">
      <h3 className="text-xl font-bold mb-2">Join the Cap Table</h3>
      <p className="text-xs text-gray-400 mb-6">
        Apply to participate in the current funding round.
      </p>

      {status === "done" ? (
        <p className="text-sm text-green-400 font-semibold py-6 text-center">
          Application received. We&apos;ll follow up by email.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full bg-white text-black px-4 py-3 rounded-xl mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full bg-white text-black px-4 py-3 rounded-xl mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <select
            value={commitment}
            onChange={(e) => setCommitment(e.target.value)}
            className="w-full bg-white text-black px-4 py-3 rounded-xl mb-6 text-sm focus:outline-none cursor-pointer"
          >
            <option value="$10k - $50k">Commitment: $10k - $50k</option>
            <option value="$50k - $250k">Commitment: $50k - $250k</option>
            <option value="$250k+">Commitment: $250k+</option>
          </select>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "Applying..." : "Apply Now"}
          </button>
          {status === "error" && (
            <p className="text-xs text-red-400 mt-3 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

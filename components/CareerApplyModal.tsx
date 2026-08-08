"use client";

import { useEffect, useState } from "react";
import { X, Lock, Send } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function CareerApplyModal({
  role,
  onClose,
}: {
  role: string | null;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  useEffect(() => {
    if (role) {
      setStatus("idle");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [role]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!role) return;
    setStatus("loading");
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.from("career_applications").insert({
        role,
        name,
        email,
        portfolio_url: portfolio,
        message,
      });
      if (error) throw error;
      setStatus("done");
      setName("");
      setEmail("");
      setPortfolio("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  if (!role) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full max-w-lg p-8 md:p-10 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-neutral-200 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-neutral-50 rounded-full z-0 opacity-50" />

        <div className="relative z-10 flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-black">Submit Profile</h3>
            <p className="text-sm font-medium text-neutral-500 mt-1">
              Applying for:{" "}
              <span className="text-black font-bold border-b border-black">{role}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-2xl bg-white border border-neutral-200 text-neutral-500 hover:text-black hover:bg-neutral-100 transition-all flex items-center justify-center shadow-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {status === "done" ? (
          <div className="relative z-10 py-10 text-center">
            <p className="text-lg font-bold text-black mb-2">Application sent.</p>
            <p className="text-sm text-neutral-500">We&apos;ll be in touch by email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name / Alias"
              className="w-full bg-neutral-50 border border-neutral-200 p-4 rounded-xl text-sm text-black font-medium focus:outline-none focus:border-black focus:bg-white transition-all placeholder:text-neutral-400"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full bg-neutral-50 border border-neutral-200 p-4 rounded-xl text-sm text-black font-medium focus:outline-none focus:border-black focus:bg-white transition-all placeholder:text-neutral-400"
            />
            <input
              type="url"
              required
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              placeholder="LinkedIn / GitHub / Portfolio URL"
              className="w-full bg-neutral-50 border border-neutral-200 p-4 rounded-xl text-sm text-black font-medium focus:outline-none focus:border-black focus:bg-white transition-all placeholder:text-neutral-400"
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your experience and vision..."
              className="w-full bg-neutral-50 border border-neutral-200 p-4 rounded-xl text-sm text-black font-medium h-28 resize-none focus:outline-none focus:border-black focus:bg-white transition-all placeholder:text-neutral-400"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-black text-white font-bold text-sm rounded-xl hover:bg-neutral-800 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === "loading" ? "Transmitting..." : "Transmit Application"}
              <Send className="w-3.5 h-3.5" />
            </button>
            {status === "error" && (
              <p className="text-xs text-red-500 text-center">
                Something went wrong. Please try again.
              </p>
            )}
            <p className="text-center text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-4 flex items-center justify-center gap-1.5">
              <Lock className="w-2.5 h-2.5" /> Encrypted end-to-end routing
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

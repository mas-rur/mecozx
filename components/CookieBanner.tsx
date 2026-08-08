"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("mecozx_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function respond(value: "accepted" | "declined") {
    localStorage.setItem("mecozx_cookie_consent", value);
    setVisible(false);
  }

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white border border-neutral-200 p-5 rounded-2xl shadow-2xl z-50 transform transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="text-base font-bold text-black mb-1 flex items-center gap-2">
            <span>🍪</span> Cookie Preferences
          </h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            We use cookies to optimize your platform experience and understand how the site is
            used.
          </p>
        </div>
        <div className="flex items-center justify-end gap-3 border-t border-neutral-100 pt-3">
          <button
            onClick={() => respond("declined")}
            className="text-xs font-semibold text-neutral-400 hover:text-black px-3 py-2 rounded-lg transition-colors duration-200"
          >
            Decline
          </button>
          <button
            onClick={() => respond("accepted")}
            className="text-xs font-semibold bg-black text-white px-5 py-2.5 rounded-xl hover:bg-neutral-800 transition-all duration-200 tracking-wide shadow-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

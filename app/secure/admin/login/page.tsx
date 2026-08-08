import { ShieldCheck } from "lucide-react";
import { loginAction } from "../actions";

export const metadata = {
  title: "Admin Login | mecozx",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const hasError = searchParams?.error === "1";

  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
            <ShieldCheck className="w-5 h-5 text-white/70" strokeWidth={1.75} />
          </div>
          <h1 className="text-xl font-bold tracking-tight">mecozx admin</h1>
          <p className="text-xs text-white/40 mt-1.5 font-mono uppercase tracking-widest">
            Restricted access
          </p>
        </div>

        <form action={loginAction} className="space-y-3">
          <input
            type="password"
            name="password"
            required
            autoFocus
            placeholder="Admin password"
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
          />
          {hasError && (
            <p className="text-xs text-red-400 font-medium px-1">
              Incorrect password. Try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-white text-black font-bold text-sm py-3.5 rounded-xl hover:bg-white/90 transition-colors"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-[10px] text-white/25 font-mono uppercase tracking-widest mt-8">
          mecozx internal tooling
        </p>
      </div>
    </main>
  );
}

import Link from "next/link";
import {
  SatelliteDish,
  FileText,
  ArrowRight,
  Terminal,
  ShieldCheck,
  Network,
  Images,
  Plus,
} from "lucide-react";

export const metadata = {
  title: "mecozx | Corporate Hub & Sponsorship Registry",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between relative overflow-x-hidden">
      <div
        className="absolute inset-0 opacity-40 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#333333 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <header className="w-full pt-10 md:pt-14 text-center relative z-10">
        <Link href="/" className="inline-block group">
          <h1 className="text-3xl font-bold tracking-tighter text-white">
            mecozx<span className="text-neutral-600 group-hover:text-white transition-colors font-normal">.corp</span>
          </h1>
        </Link>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 relative z-10 flex flex-col justify-center">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-floating">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <SatelliteDish className="w-2.5 h-2.5 animate-pulse" /> Sponsorship Status: Pending
            Review
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
            Protocol Infrastructure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">
              &amp; Development
            </span>
          </h2>
          <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed font-light">
            Access authorized operational records, ecosystem documentation, and pending
            integration layers for the mecozx deployment branch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-16">
          <div className="md:col-span-2 bg-[rgba(18,18,18,0.65)] backdrop-blur-2xl border border-neutral-800 rounded-2xl p-6 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-neutral-700 transition-colors duration-500">
            <div className="absolute -top-24 -right-24 w-64 h-64 border border-neutral-800 rounded-full animate-spin pointer-events-none [animation-duration:25s]" />
            <div className="absolute -top-12 -right-12 w-40 h-40 border border-dashed border-neutral-700 rounded-full animate-spin pointer-events-none [animation-duration:25s] [animation-direction:reverse]" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-bold text-xs">
                  01
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                  Corporate Identity &amp; Blueprint
                </h3>
              </div>

              <div className="space-y-5 max-w-xl">
                <h4 className="text-2xl font-bold tracking-tight text-white">
                  Next-Generation Systems Integration
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  mecozx operates at the intersection of automated workflows and cryptographic
                  verification models. We build architecture optimized for low-latency
                  distribution systems, offering highly robust execution branches for scaling
                  enterprises globally.
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  Our roadmap prioritizes deep structural alignment with strategic network
                  sponsors to integrate high-throughput operational mechanisms directly into our
                  core framework layer.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 mt-10 border-t border-neutral-800 text-left relative z-10">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Registry
                </div>
                <div className="text-sm font-bold text-white mt-1">Active // 2026</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Node Hub
                </div>
                <div className="text-sm font-bold text-white mt-1">Global Cluster</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Integrations
                </div>
                <div className="text-sm font-bold text-emerald-400 mt-1">94% Nominal</div>
              </div>
            </div>
          </div>

          <a
            href="/whitepaper.pdf"
            target="_blank"
            className="bg-white text-black rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                    System Asset
                  </h3>
                </div>
                <span className="text-[9px] font-bold px-2 py-1 bg-black text-white rounded tracking-wider">
                  v2.4.0
                </span>
              </div>

              <h4 className="text-xl font-bold tracking-tight text-black mb-3">
                Technical Whitepaper
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-8 font-medium">
                Review the architectural dynamics, verification formulas, and mathematical
                mechanics behind the ecosystem execution model.
              </p>
            </div>

            <div className="w-full px-5 py-4 bg-black text-white text-xs font-bold rounded-xl hover:bg-neutral-800 transition-colors duration-300 tracking-wide flex items-center justify-between group relative z-10">
              <span className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-red-500" /> Download Spec
              </span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        <div className="w-full mb-16 border-t border-b border-neutral-800 py-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neutral-600" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neutral-600" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-neutral-600" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neutral-600" />

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-10 flex items-center gap-2">
              <Network className="w-3 h-3" /> Strategic Backers &amp; Network Partners
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center px-4 w-full max-w-4xl">
              {[1, 2, 3, 4].map((slot) => (
                <div
                  key={slot}
                  className="h-16 w-full max-w-[160px] border border-dashed border-neutral-700 bg-neutral-900/50 rounded flex flex-col items-center justify-center gap-1 text-[9px] font-bold text-neutral-500 uppercase tracking-widest group cursor-crosshair transition-colors hover:border-amber-500/50 hover:bg-amber-500/5"
                >
                  <Plus className="w-3 h-3 text-neutral-600 group-hover:text-amber-500 transition-colors" />
                  <span className="group-hover:hidden">Open Slot</span>
                  <span className="hidden group-hover:block text-amber-500">Awaiting Auth</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 w-full">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
              <Images className="w-3.5 h-3.5 text-neutral-600" /> Media Assets &amp; Ecosystem
              Nodes
            </h3>
            <span className="text-[9px] text-neutral-600 font-mono tracking-widest">
              GRID_VIEW_02 / SECURE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div className="group bg-[rgba(18,18,18,0.65)] backdrop-blur-2xl border border-neutral-800 rounded-xl p-3 hover:border-neutral-700 transition-colors">
              <div className="aspect-[16/10] w-full rounded-lg overflow-hidden mb-4 relative flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
                <Terminal className="w-8 h-8 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
              </div>
              <div className="flex justify-between items-center px-1">
                <span className="text-xs font-bold text-neutral-200">Deployment Grid Alpha</span>
                <span className="text-[9px] px-1.5 py-0.5 font-mono bg-neutral-800 border border-neutral-700 rounded text-neutral-400">
                  IMG_01
                </span>
              </div>
            </div>

            <div className="group bg-[rgba(18,18,18,0.65)] backdrop-blur-2xl border border-neutral-800 rounded-xl p-3 hover:border-neutral-700 transition-colors">
              <div className="aspect-[16/10] w-full rounded-lg overflow-hidden mb-4 relative flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
                <ShieldCheck className="w-8 h-8 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
              </div>
              <div className="flex justify-between items-center px-1">
                <span className="text-xs font-bold text-neutral-200">Core Network Protocol</span>
                <span className="text-[9px] px-1.5 py-0.5 font-mono bg-neutral-800 border border-neutral-700 rounded text-neutral-400">
                  IMG_02
                </span>
              </div>
            </div>

            <div className="group border border-dashed border-neutral-700 bg-neutral-900/30 rounded-xl p-3 flex flex-col justify-between min-h-[200px] md:min-h-0 relative hover:border-neutral-500 transition-colors duration-300">
              <div className="flex-1 rounded-lg border border-neutral-800 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 rounded-full border border-dashed border-neutral-600 flex items-center justify-center text-neutral-500 mb-3 group-hover:text-white group-hover:border-white transition-colors duration-300">
                  <Plus className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-neutral-300 tracking-tight">
                  Sponsorship Anchor Vault
                </span>
                <p className="text-[10px] text-neutral-500 mt-2 max-w-[180px]">
                  Awaiting authorization for strategic brand allocation vector.
                </p>
              </div>
              <div className="flex justify-between items-center pt-3 px-1">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />{" "}
                  Reserved Pipeline
                </span>
                <span className="text-[9px] px-1.5 py-0.5 font-mono bg-neutral-800 border border-neutral-700 rounded text-neutral-500">
                  SPONS_03
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center gap-4 w-full max-w-xs sm:max-w-none justify-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black text-xs font-bold rounded-xl hover:bg-neutral-200 transition-all duration-300 tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Terminal className="w-3.5 h-3.5" /> Return to Terminal
          </Link>
          <Link
            href="/verify"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 text-white text-xs font-bold rounded-xl hover:bg-neutral-900 hover:border-neutral-500 transition-all duration-300 tracking-wide flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" /> Identity Verification
          </Link>
        </div>
      </main>

      <footer className="w-full text-center py-8 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-600 relative z-10 px-4 mt-8 border-t border-neutral-800/60 bg-[#050505]/80 backdrop-blur-sm">
        System Registry Dashboard // Deployment Branch Build 2026.06
      </footer>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  PieChart,
  PlaneTakeoff,
  Ticket,
  Gift,
  Handshake,
  Server,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import CareerApplyModal from "@/components/CareerApplyModal";

const phrases = ["infrastructure.", "Web3 ecosystems.", "decentralization.", "mecozx."];

function useTypewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const current = phrases[phraseIndex];
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }
      setText(current.substring(0, charIndex));

      let speed = isDeleting ? 30 : 70;

      if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 500;
      }

      timeoutId = setTimeout(tick, speed);
    }

    timeoutId = setTimeout(tick, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return text;
}

const perks = [
  { icon: PieChart, title: "Share Holding", desc: "Equity distribution for core contributors." },
  { icon: PlaneTakeoff, title: "Travel Pass", desc: "Global mobility covered for node summits." },
  { icon: Ticket, title: "Event Access", desc: "VIP routing to major Web3 conferences." },
  { icon: Gift, title: "Monthly Gifts", desc: "Exclusive hardware and brand care packages." },
];

const roles = [
  {
    icon: Handshake,
    title: "Co-Founder",
    desc: "Drive global fundraising models, corporate strategy, and establish high-throughput distribution agreements with strategic network partners.",
    tag: "Equity / Remote",
  },
  {
    icon: Server,
    title: "Chief Tech Officer",
    desc: "Own the technical roadmap, manage system architectures, and ensure optimal resource distribution vectors across distributed engineering networks.",
    tag: "Full-Time / Hybrid",
  },
  {
    icon: Handshake,
    title: "Smart Contract Dev",
    desc: "Author secure protocol blocks in Solidity. Audit system optimization pipelines and deploy zero-fault structures on high-performance EVM nodes.",
    tag: "Contract / Remote",
  },
  {
    icon: Server,
    title: "App Developer",
    desc: "Construct state-managed dashboard nodes with clean interface layers. Bridge client-side environments directly into cryptographic network logic.",
    tag: "Full-Time / Remote",
  },
];

export default function CareersPage() {
  const typed = useTypewriter();
  const [activeRole, setActiveRole] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen bg-[#fafafa] text-black flex flex-col justify-between relative"
      style={{
        backgroundImage: "radial-gradient(#d4d4d4 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      <header className="w-full pt-10 md:pt-14 text-center relative z-10">
        <Link href="/" className="inline-block group">
          <h1 className="text-3xl font-bold tracking-tighter text-black">
            mecozx
            <span className="text-neutral-400 group-hover:text-black transition-colors font-normal">
              .career
            </span>
          </h1>
        </Link>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-5 md:px-6 flex flex-col justify-center items-center my-12 relative z-10">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-[10px] font-bold uppercase tracking-widest text-neutral-500 shadow-sm mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" /> Active Intake
            Pipeline
          </div>
          <div className="text-3xl md:text-5xl font-bold tracking-tight text-black max-w-2xl mx-auto leading-tight">
            Build the future of <br className="hidden md:block" />
            <span className="text-black underline decoration-neutral-200 decoration-4 underline-offset-4 font-bold">
              {typed}
              <span className="border-r-2 border-neutral-400 ml-0.5 animate-blink" />
            </span>
          </div>
          <p className="text-sm text-neutral-500 max-w-md mx-auto pt-4 font-medium leading-relaxed">
            Join the execution branch. We are actively allocating resources for strategic node
            deployments and engineering architectures.
          </p>
        </div>

        <div className="w-full max-w-4xl mb-16">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-5 text-center">
            Core Ecosystem Perks
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="bg-white border border-neutral-200 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl group"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-600 mb-3 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <perk.icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-black mb-1">{perk.title}</h4>
                <p className="text-[10px] text-neutral-500 font-medium">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl relative z-10">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-white border border-neutral-200 rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-black group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-neutral-50 rounded-full group-hover:scale-[2.5] transition-transform duration-700 ease-out z-0" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center text-black mb-6 shadow-sm group-hover:bg-black group-hover:text-white group-hover:rotate-12 transition-all duration-300">
                  <role.icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-black mb-3">{role.title}</h3>
                <p className="text-sm text-neutral-500 font-medium leading-relaxed mb-8">
                  {role.desc}
                </p>
              </div>
              <div className="relative z-10 flex items-center justify-between pt-5 border-t border-neutral-100">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  {role.tag}
                </span>
                <button
                  onClick={() => setActiveRole(role.title)}
                  className="px-5 py-2.5 bg-neutral-100 border border-transparent text-black text-xs font-bold rounded-xl hover:bg-black hover:text-white hover:border-black transition-all shadow-sm flex items-center gap-2"
                >
                  Initialize <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-neutral-200 bg-white text-xs font-bold text-neutral-500 hover:text-black hover:border-black transition-colors flex items-center gap-2 uppercase tracking-widest shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Directory
          </Link>
        </div>
      </main>

      <footer className="w-full text-center pb-8 pt-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-400 px-4 relative z-10">
        &copy; {new Date().getFullYear()} mecozx. Human Capital Registry.
      </footer>

      <CareerApplyModal role={activeRole} onClose={() => setActiveRole(null)} />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  XCircle,
  ShieldQuestion,
  CheckCircle2,
  Send,
  Mail,
  AlertTriangle,
} from "lucide-react";
import { teamMembers, type TeamMember } from "@/lib/team-data";

const phrases = ["are talking with", "contact"];

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

function normalize(name: string) {
  return name.toLowerCase().trim();
}

// Keys people are likely to search by (first name), mapped to the team member.
function lookupKey(value: string): TeamMember | undefined {
  return teamMembers.find((m) => normalize(m.name).startsWith(normalize(value)) || normalize(m.name.split(" ")[0]) === normalize(value));
}

export default function VerifyPage() {
  const typed = useTypewriter();
  const [query, setQuery] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [result, setResult] = useState<"none" | "found" | "scam">("none");
  const [foundMember, setFoundMember] = useState<TeamMember | null>(null);
  const [scamName, setScamName] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const matches = query.trim()
    ? teamMembers.filter((m) => normalize(m.name).includes(normalize(query)))
    : [];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setSuggestionsOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  function selectMember(member: TeamMember) {
    setQuery(member.name);
    setSuggestionsOpen(false);
    setFoundMember(member);
    setResult("found");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setSuggestionsOpen(false);
    const match = lookupKey(query);
    if (match) {
      setFoundMember(match);
      setResult("found");
    } else {
      setScamName(query);
      setResult("scam");
    }
  }

  function clearSearch() {
    setQuery("");
    setSuggestionsOpen(false);
    setResult("none");
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-black flex flex-col justify-between">
      <header className="w-full pt-10 md:pt-14 text-center">
        <Link href="/" className="inline-block group">
          <h1 className="text-3xl font-bold tracking-tighter">
            mecozx
            <span className="text-neutral-400 group-hover:text-black transition-colors font-normal">
              .
            </span>
          </h1>
        </Link>
      </header>

      <main className="flex-1 max-w-xl w-full mx-auto px-5 md:px-6 flex flex-col justify-center items-center my-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-neutral-400 uppercase tracking-widest text-[10px] md:text-[11px] font-bold">
            Security Shield Layer
          </h2>
          <div className="text-2xl md:text-3xl font-bold tracking-tight text-black max-w-sm md:max-w-none mx-auto leading-snug">
            Verify whom you{" "}
            <span className="underline decoration-neutral-200 decoration-2 underline-offset-4 font-bold">
              {typed}
              <span className="border-r-2 border-neutral-400 ml-0.5 animate-blink" />
            </span>
          </div>
        </div>

        <div ref={containerRef} className="w-full relative z-30 mb-8">
          <form
            onSubmit={handleSubmit}
            className="relative flex items-center bg-white border border-neutral-200 focus-within:border-black rounded-2xl p-1.5 transition-all duration-300 shadow-sm"
          >
            <div className="pl-4 text-neutral-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter team member name..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSuggestionsOpen(true);
              }}
              className="w-full bg-transparent pl-3 pr-4 py-3 text-sm font-semibold focus:outline-none text-black placeholder:text-neutral-400"
            />
            {query && (
              <button
                type="button"
                onClick={clearSearch}
                className="pr-3 text-neutral-400 hover:text-black transition-colors"
              >
                <XCircle className="w-4 h-4" />
              </button>
            )}
          </form>

          {suggestionsOpen && matches.length > 0 && (
            <div className="absolute w-full mt-2 bg-white border border-neutral-200 rounded-2xl shadow-xl overflow-hidden z-40">
              <div className="divide-y divide-neutral-100 max-h-60 overflow-y-auto">
                {matches.map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => selectMember(m)}
                    className="w-full text-left px-5 py-3.5 text-sm font-semibold hover:bg-neutral-50 transition-colors flex items-center justify-between group text-black"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-7 h-7">
                        <Image
                          src={m.avatar}
                          alt={m.name}
                          fill
                          sizes="28px"
                          className="rounded-lg object-cover border border-neutral-200"
                        />
                      </div>
                      <span>{m.name}</span>
                    </div>
                    <span className="text-xs text-neutral-400 group-hover:text-black font-medium transition-colors">
                      {m.role} &rarr;
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-full min-h-[340px] flex items-center justify-center relative">
          {result === "none" && (
            <div className="text-center p-8 md:p-12 border border-neutral-200 rounded-[2rem] bg-white w-full flex flex-col items-center justify-center transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              <div className="w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 shadow-sm mb-5">
                <ShieldQuestion className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-black tracking-tight">
                Awaiting identity evaluation parameters.
              </p>
              <p className="text-xs text-neutral-400 mt-1.5 font-medium max-w-xs leading-relaxed">
                Search official staff names to verify valid authorization records and
                communication channels.
              </p>
            </div>
          )}

          {result === "found" && foundMember && (
            <div className="w-full border border-neutral-200 rounded-[2rem] bg-white p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 transition-all duration-300">
              <div className="relative flex-shrink-0 mt-2">
                <div className="absolute inset-0 rounded-2xl bg-black/10 animate-ping opacity-75 scale-95" />
                <div className="relative w-24 h-24 md:w-28 md:h-28">
                  <Image
                    src={foundMember.avatar}
                    alt={foundMember.name}
                    fill
                    sizes="112px"
                    className="relative z-10 rounded-2xl object-cover border border-neutral-200 shadow-sm"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4 w-full">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold tracking-tight text-black">
                      {foundMember.name}
                    </h3>
                    <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-black border border-neutral-200 max-w-max mx-auto md:mx-0">
                      <CheckCircle2 className="w-2.5 h-2.5" /> {foundMember.status}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-400 font-bold tracking-widest uppercase mt-1.5 md:mt-0.5">
                    {foundMember.role}
                  </p>
                </div>

                <p className="text-neutral-500 text-sm leading-relaxed font-medium px-2 md:px-0">
                  {foundMember.bio}
                </p>

                <div className="pt-3 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold">
                  <a
                    href={`https://t.me/${foundMember.telegram.replace("@", "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center md:justify-start gap-2.5 p-3 border border-neutral-200 rounded-xl hover:border-black hover:bg-neutral-50 transition-all text-neutral-600 hover:text-black"
                  >
                    <Send className="w-3.5 h-3.5" /> <span>{foundMember.telegram}</span>
                  </a>
                  <a
                    href={`mailto:${foundMember.email}`}
                    className="flex items-center justify-center md:justify-start gap-2.5 p-3 border border-neutral-200 rounded-xl hover:border-black hover:bg-neutral-50 transition-all text-neutral-600 hover:text-black"
                  >
                    <Mail className="w-3.5 h-3.5" /> <span>{foundMember.email}</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {result === "scam" && (
            <div className="w-full border-2 border-red-500 rounded-[2rem] bg-red-50/60 p-6 md:p-8 shadow-[0_20px_50px_rgba(239,68,68,0.1)] flex flex-col items-center text-center gap-5 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white animate-bounce shadow-md">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <div className="space-y-2 max-w-sm">
                <h3 className="text-xl md:text-2xl font-bold text-red-600 tracking-tight">
                  Security Alert: High Risk
                </h3>
                <p className="text-xs text-red-500 uppercase tracking-widest font-bold">
                  Identity Not Recognized
                </p>
              </div>

              <div className="bg-white border border-red-100 p-4 rounded-2xl w-full text-sm font-medium text-neutral-800 shadow-sm leading-relaxed">
                The entity querying as{" "}
                <strong className="text-red-600">&ldquo;{scamName}&rdquo;</strong> is{" "}
                <span className="underline font-bold text-black">NOT</span> a match for any
                authorized representative, founder, or partner of <span className="font-bold">mecozx.</span>
              </div>

              <p className="text-xs text-neutral-500 font-medium leading-relaxed px-2">
                If someone is contacting you under this name claiming to represent mecozx, treat
                it as social engineering. Do not sign keys, do not open links, and terminate
                communications immediately.
              </p>

              <button
                onClick={clearSearch}
                className="mt-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl transition-all shadow-md"
              >
                Reset Shield Interface
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="w-full text-center pb-8 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-400 px-4">
        &copy; {new Date().getFullYear()} mecozx. Cryptographic Identity Attestation Ledger.
      </footer>
    </div>
  );
}

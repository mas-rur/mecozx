"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Plus, ArrowUpRight, ChevronRight } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

const features = [
  "Connected with the internet",
  "Basically based on crypto & blockchain",
  "Can easily maintain via mobile app",
  "Biometric identification feature",
  "NFC & inductive coupling enabled",
  "Real-time price & balance transparent display",
];

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/verify", label: "Verify Identity" },
];

export default function NavSidebar() {
  const [open, setOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <>
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          mecozx.
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Menu
        </button>
      </nav>

      <div
        className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-black text-white z-50 transform transition-transform duration-500 ease-in-out p-8 overflow-y-auto flex flex-col shadow-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold tracking-tighter">Navigation.</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-white text-2xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-8 text-lg font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-gray-400 transition-colors flex justify-between items-center"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          ))}

          <div>
            <button
              onClick={() => setFeaturesOpen((v) => !v)}
              className="w-full text-left hover:text-gray-400 transition-colors flex justify-between items-center"
            >
              <span>Card Features</span>
              <Plus
                className={`w-4 h-4 transition-transform ${featuresOpen ? "rotate-45" : ""}`}
              />
            </button>
            {featuresOpen && (
              <ul className="flex flex-col gap-3 pl-4 mt-4 text-sm text-gray-400 font-normal list-disc">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="https://scrawny-thyme-5f5.notion.site/WhitePaper-v1-0-4-278c21e6f7d180a6a728d8766ebb6b87?source=copy_link"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition-colors flex justify-between items-center"
          >
            <span>Read Whitepaper</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div>
            <button
              onClick={() => setWaitlistOpen((v) => !v)}
              className="w-full text-left hover:text-gray-400 transition-colors flex justify-between items-center"
            >
              <span>Join Waitlist</span>
              <Plus
                className={`w-4 h-4 transition-transform ${waitlistOpen ? "rotate-45" : ""}`}
              />
            </button>
            {waitlistOpen && (
              <div className="mt-4">
                <p className="text-sm font-normal text-gray-400 mb-4">
                  Be the first to know when the mecozx card ships to consumers.
                </p>
                <WaitlistForm />
              </div>
            )}
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}
    </>
  );
}

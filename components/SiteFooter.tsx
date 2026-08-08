import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z"
      />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.862-1.297 1.198-1.99a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.863-.886.077.077 0 0 1-.008-.128c.125-.094.248-.19.367-.288a.077.077 0 0 1 .081-.01c3.927 1.797 8.18 1.797 12.067 0a.077.077 0 0 1 .081.01c.119.098.242.195.368.288a.077.077 0 0 1-.008.128 12.156 12.156 0 0 1-1.863.886.076.076 0 0 0-.041.106c.336.693.736 1.36 1.198 1.99a.078.078 0 0 0 .084.028 19.83 19.83 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
      />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">mecozx.</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building the hardware layer for the decentralized future. Secure, transparent, and
              biometric.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-gray-500">
              Product
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/#assets" className="hover:text-gray-400 transition-colors">
                  Smart Card
                </Link>
              </li>
              <li>
                <Link href="/verify" className="hover:text-gray-400 transition-colors">
                  Verify Identity
                </Link>
              </li>
              <li>
                <Link href="/#roadmap" className="hover:text-gray-400 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <a
                  href="/whitepaper.pdf"
                  target="_blank"
                  className="hover:text-gray-400 transition-colors"
                >
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-gray-500">
              Company
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/about" className="hover:text-gray-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/#cap-table" className="hover:text-gray-400 transition-colors">
                  Cap Table
                </Link>
              </li>
              <li>
                <a href="mailto:mecozx@proton.me" className="hover:text-gray-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-gray-500">
              Stay Updated
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Get the latest on our seed round and product drops.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/mecozxpro"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </a>
            <a
              href="https://discord.gg/6GWPXwXWPM"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <DiscordIcon className="w-5 h-5" />
            </a>
          </div>

          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} mecozx. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

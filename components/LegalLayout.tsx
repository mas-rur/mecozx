import Link from "next/link";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-5 md:py-16">
      <div className="max-w-[800px] mx-auto bg-white border border-slate-200 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] p-6 md:p-10">
        <header className="border-b border-slate-200 pb-6 mb-8">
          <Link
            href="/"
            className="text-xs font-bold text-slate-400 hover:text-black transition-colors uppercase tracking-widest"
          >
            &larr; mecozx
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-1 text-slate-900">
            {title}
          </h1>
          <p className="text-slate-500 text-sm font-medium">Last Updated: {lastUpdated}</p>
        </header>

        <main className="text-slate-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900 [&_h2]:mt-9 [&_h2]:mb-3 [&_p]:mb-5 [&_p]:text-[15px] [&_ul]:mb-5 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:mb-2.5 [&_li]:text-[15px] [&_a]:text-blue-600 [&_a]:font-medium [&_a]:no-underline [&_a:hover]:underline">
          {children}
        </main>

        <footer className="mt-10 pt-6 border-t border-slate-200 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} mecozx. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

import { LogOut, Wallet, Briefcase, Inbox } from "lucide-react";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";
import { logoutAction } from "./actions";

export const metadata = {
  title: "Admin Dashboard | mecozx",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic"; // always fetch fresh submissions

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

async function getSubmissions() {
  const supabase = getSupabaseAdminClient();

  const [waitlist, investors, careers] = await Promise.all([
    supabase.from("waitlist_signups").select("*").order("created_at", { ascending: false }),
    supabase.from("investor_applications").select("*").order("created_at", { ascending: false }),
    supabase.from("career_applications").select("*").order("created_at", { ascending: false }),
  ]);

  return {
    waitlist: waitlist.data ?? [],
    investors: investors.data ?? [],
    careers: careers.data ?? [],
    errors: [waitlist.error, investors.error, careers.error].filter(Boolean),
  };
}

export default async function AdminDashboardPage() {
  const { waitlist, investors, careers, errors } = await getSubmissions();

  const stats = [
    { label: "Waitlist & newsletter", value: waitlist.length, icon: Inbox },
    { label: "Cap table applications", value: investors.length, icon: Wallet },
    { label: "Career applications", value: careers.length, icon: Briefcase },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-black">
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold tracking-tight">mecozx admin</h1>
            <p className="text-[11px] text-neutral-400 font-mono uppercase tracking-widest mt-0.5">
              Submission dashboard
            </p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-black border border-neutral-200 hover:border-black rounded-full px-4 py-2 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" /> Sign out
            </button>
          </form>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {errors.length > 0 && (
          <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            Some data couldn&apos;t be loaded. Confirm SUPABASE_SERVICE_ROLE_KEY and
            NEXT_PUBLIC_SUPABASE_URL are set correctly, and that supabase/schema.sql has been run.
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-neutral-200 rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500">
                <s.icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight">{s.value}</div>
                <div className="text-[11px] text-neutral-400 font-semibold uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Section title="Waitlist & newsletter signups" icon={Inbox}>
          {waitlist.length === 0 ? (
            <EmptyRow />
          ) : (
            <Table
              columns={["Email", "Source", "Submitted"]}
              rows={waitlist.map((r: any) => [r.email, r.source, formatDate(r.created_at)])}
            />
          )}
        </Section>

        <Section title="Cap table applications" icon={Wallet}>
          {investors.length === 0 ? (
            <EmptyRow />
          ) : (
            <Table
              columns={["Name", "Email", "Commitment", "Submitted"]}
              rows={investors.map((r: any) => [
                r.name,
                r.email,
                r.commitment,
                formatDate(r.created_at),
              ])}
            />
          )}
        </Section>

        <Section title="Career applications" icon={Briefcase}>
          {careers.length === 0 ? (
            <EmptyRow />
          ) : (
            <div className="space-y-3">
              {careers.map((r: any) => (
                <div
                  key={r.id}
                  className="bg-white border border-neutral-200 rounded-2xl p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm">{r.name}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wide bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full">
                        {r.role}
                      </span>
                    </div>
                    <span className="text-[11px] text-neutral-400 font-mono">
                      {formatDate(r.created_at)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 mb-3">
                    <a href={`mailto:${r.email}`} className="hover:text-black underline">
                      {r.email}
                    </a>
                    <a
                      href={r.portfolio_url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-black underline"
                    >
                      {r.portfolio_url}
                    </a>
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed">{r.message}</p>
                </div>
              ))}
            </div>
          )}
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-4 h-4 text-neutral-400" />
        <h2 className="text-sm font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function EmptyRow() {
  return (
    <div className="border border-dashed border-neutral-300 rounded-2xl p-8 text-center text-xs text-neutral-400 font-medium">
      No submissions yet.
    </div>
  );
}

function Table({ columns, rows }: { columns: string[]; rows: (string | number)[][] }) {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neutral-100 bg-neutral-50/60">
            {columns.map((c) => (
              <th
                key={c}
                className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-neutral-50 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3.5 text-neutral-700 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

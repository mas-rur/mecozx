# mecozx — Next.js rebuild

Upgraded rebuild of the mecozx landing site on Next.js 14 (App Router) +
TypeScript + Tailwind, with SheetDB replaced by Supabase and a password
protected admin dashboard at `/secure/admin`.

## What changed vs the original static site

- Rebuilt every page (`/`, `/about`, `/careers`, `/verify`, `/privacy`,
  `/terms`) as real React components instead of standalone HTML files,
  same black/white theme, same Space Grotesk font, same logo and team
  photos.
- All three forms (waitlist, cap table / investor, career applications)
  now write to **Supabase** instead of SheetDB.
- Added `/secure/admin` — a password-gated dashboard that lists every
  submission across all three tables.
- Swapped Font Awesome CDN icons for `lucide-react`, and the SheetDB
  `<script>` calls for typed Supabase client code.
- On the About page, the sponsor-logo tiles (which pulled in third-party
  trademarked logos - UNICEF, Ethereum, Red Bull - that don't appear to be
  confirmed real sponsors) were replaced with neutral "pending slot"
  placeholders. Swap in real logos once sponsorships are confirmed.
- The Backers marquee from the original (commented out / empty in the
  source) was left out rather than invented.

## 1. Install dependencies

This project was hand-built in a sandboxed environment without internet
access, so dependencies have **not** been installed and the build has
**not** been verified yet. Do this first, locally:

```bash
npm install
```

## 2. Set up Supabase

1. Create a project at [supabase.com](https://supabase.com) (free tier is
   fine).
2. Open **SQL Editor -> New query**, paste the contents of
   `supabase/schema.sql`, and run it. This creates the three tables
   (`waitlist_signups`, `investor_applications`, `career_applications`)
   with Row Level Security locked down so the public key can only
   INSERT, never read.
3. Go to **Project Settings -> API** and copy:
   - `Project URL`
   - `anon` `public` key
   - `service_role` key (keep this secret - server-only)

## 3. Configure environment variables

```bash
cp .env.example .env.local
```

Fill in:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_PASSWORD=<pick a strong password>
ADMIN_SESSION_SECRET=<openssl rand -hex 32>
```

## 4. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`. Submissions go straight into Supabase;
view them at `http://localhost:3000/secure/admin` (log in with
`ADMIN_PASSWORD`).

## 5. Deploy

Deploy to Vercel (or any Next.js host) and set the same five environment
variables in your hosting provider's dashboard. Once deployed,
`domain.com/secure/admin` will work exactly like it does locally.

## Notes / things to double check before launch

- The intro video is large (~18MB, `public/introvid.mp4`) - fine for now,
  but consider compressing it or moving it to a CDN/streaming host for
  production.
- Team member emails/Telegram handles on `/verify` and bios throughout
  are carried over from the original site content - review for accuracy.
- `ADMIN_PASSWORD` is a single shared password by design (per your
  request). If you later want per-person logins or audit logs, that's a
  natural next upgrade via Supabase Auth.

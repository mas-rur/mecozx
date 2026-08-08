-- mecozx | Supabase schema
-- Run this once in the Supabase SQL editor (Project -> SQL Editor -> New query).

create extension if not exists "pgcrypto";

-- 1. Waitlist + newsletter signups (sidebar menu form + footer "Stay Updated" form)
create table if not exists waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null default 'waitlist', -- 'waitlist' | 'newsletter'
  created_at timestamptz not null default now()
);

-- 2. Investor / cap table applications ("Join the Cap Table" form)
create table if not exists investor_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  commitment text not null,
  created_at timestamptz not null default now()
);

-- 3. Career applications (Careers page apply modal)
create table if not exists career_applications (
  id uuid primary key default gen_random_uuid(),
  role text not null,
  name text not null,
  email text not null,
  portfolio_url text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Row Level Security: allow anonymous INSERT only. No SELECT/UPDATE/DELETE
-- for the public anon key - the admin dashboard reads with the service_role
-- key from the server, which bypasses RLS entirely.

alter table waitlist_signups enable row level security;
alter table investor_applications enable row level security;
alter table career_applications enable row level security;

drop policy if exists "public can insert waitlist" on waitlist_signups;
create policy "public can insert waitlist"
  on waitlist_signups for insert
  to anon
  with check (true);

drop policy if exists "public can insert investor" on investor_applications;
create policy "public can insert investor"
  on investor_applications for insert
  to anon
  with check (true);

drop policy if exists "public can insert career" on career_applications;
create policy "public can insert career"
  on career_applications for insert
  to anon
  with check (true);

-- Helpful indexes for the admin dashboard
create index if not exists waitlist_signups_created_at_idx on waitlist_signups (created_at desc);
create index if not exists investor_applications_created_at_idx on investor_applications (created_at desc);
create index if not exists career_applications_created_at_idx on career_applications (created_at desc);

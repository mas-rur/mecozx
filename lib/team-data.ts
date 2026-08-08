export type TeamMember = {
  key: string;
  name: string;
  role: string;
  status: string;
  bio: string;
  avatar: string;
  telegram: string;
  email: string;
};

export const teamMembers: TeamMember[] = [
  {
    key: "masrur",
    name: "Masrur A.",
    role: "Founder & CEO",
    status: "Verified Team Core",
    bio: "Oversees core financial ledger protocol parsing, physical OLED smart-card component configuration, and secure wallet integration schemes.",
    avatar: "/ceo.jpg",
    telegram: "@masrurxyz",
    email: "masrur@mecozx.com",
  },
  {
    key: "ellie",
    name: "Ellie S.",
    role: "Brand Ambassador",
    status: "Verified",
    bio: "Official brand ambassador of mecozx, representing the product across community and social channels.",
    avatar: "/ellie.jpg",
    telegram: "@ellie_sra",
    email: "elliesra@mecozx.com",
  },
  {
    key: "sarah",
    name: "Sarah K.",
    role: "Head of Ops / Lead Hardware Engineer",
    status: "Verified Engineer",
    bio: "Manages embedded secure enclave firmware deployments, low-latency display cycles, and physical layer multi-chain integration.",
    avatar: "/sarah.jpg",
    telegram: "@sarah_tech",
    email: "sarah@mecozx.com",
  },
  {
    key: "jasper",
    name: "Jasper",
    role: "Lead Engineer, CTO",
    status: "Verified Developer",
    bio: "Audits multi-chain liquidity routes, automated non-custodial merchant pipelines, and mathematical collision security states.",
    avatar: "/adib.jpg",
    telegram: "@jasper_dev",
    email: "jasper@mecozx.com",
  },
];

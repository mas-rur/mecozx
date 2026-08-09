import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "mecozx | The Future of Crypto Hardware",
  description:
    "The world's first T-OLED smart card powered by inductive coupling. Transparent. Biometric. Crypto.",
  icons: { icon: "/logo.jpg" },
  verification: {
    google: "RomfRyvPLETykk8zrkagsCwgNg52PyGOVvjNUO7SAAE",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}

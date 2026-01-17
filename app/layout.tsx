import type { Metadata } from "next";
import { Syncopate, Space_Grotesk } from "next/font/google"; // Premium Cinematic Fonts
import "./globals.css";

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-syncopate",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "PARADOX | The Future of Sound",
  description: "High-fidelity audio engineered for the silence.",
};

import SmoothScroll from "@/components/SmoothScroll"; // Import Lenis

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${syncopate.variable} ${spaceGrotesk.variable} bg-[#050505] text-white antialiased overflow-x-hidden`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

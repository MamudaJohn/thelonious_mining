import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Headers";
import Footer from "@/components/Footers";
import ScrollUI from "@/components/ScrollUI";
import UpBarNavigation from "@/components/UpBarNavigation";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "thelonious Resources — Exploration to Market",
    template: "%s — thelonious Resources",
  },
  description:
    "Licensed mineral exploration, mining, storage and market analysis — from first survey to your monthly report.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <body>
        <ScrollUI />
        <Header />
        {/* <UpBarNavigation /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
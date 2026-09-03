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
  metadataBase: new URL('https://theloniousmining.com'),
  title: {
    default: "Thelonious Mining — Exploration to Market",
    template: "%s — thelonious Resources",
  },
  description:
    "Licensed mineral exploration, mining, storage and market analysis company. We service from first survey to your monthly report.",
  openGraph : {
    title: "Thelonious Mining",
    description: "The top-most, most transparent mining company in Nigeria.",
    url: "https://theloniousmining.com",
    images : [
      {
        url: '/company.png',
        width: 64,
        height: 64,
        alt: 'Thelonious Mining Logo',
      },
    ],
    type: 'website',
  },
  twitter : {
    card: 'summary_large_image', 
    title: 'Thelonious Mining',
    description: 'The top-most, most transparent mining company in Nigeria.',
    images: ['/company.png'], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const jsonLd = {
    '@context': "https://theloniousmining.com",
    '@type': 'Company & Organization',
    'name': 'Thelonious Mining',
    'url': 'https://theloniousmining.com',
    'logo': 'https://theloniousmining.com/company.png'
  }
  
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <head>
        <script 
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
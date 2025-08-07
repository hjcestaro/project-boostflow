import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BoostFlow - SaaS Landing Page",
  description:
    "BoostFlow is a sleek and modern SaaS landing page built with Next.js and Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "BoostFlow - SaaS Landing Page",
    description:
      "BoostFlow is a sleek and modern SaaS landing page built with Next.js and Tailwind CSS.",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "BoostFlow Landing Page",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "BoostFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoostFlow - SaaS Landing Page",
    description:
      "BoostFlow is a sleek and modern SaaS landing page built with Next.js and Tailwind CSS.",
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased
        `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

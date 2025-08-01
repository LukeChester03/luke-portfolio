import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/Components/Header";
import PageTransition from "@/Components/PageTransition";
import FlyTransition from "@/Components/FlyTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Luke Chester - Software Developer Portfolio",
    template: "%s | Luke Chester"
  },
  description: "Software developer specializing in web programming, app development, and AI-powered solutions. View my portfolio, skills, and experience.",
  keywords: [
    "software developer",
    "web development",
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "AI",
    "portfolio",
    "Luke Chester"
  ],
  authors: [{ name: "Luke Chester" }],
  creator: "Luke Chester",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lukechester.dev",
    title: "Luke Chester - Software Developer Portfolio",
    description: "Software developer specializing in web programming, app development, and AI-powered solutions.",
    siteName: "Luke Chester Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Chester - Software Developer Portfolio",
    description: "Software developer specializing in web programming, app development, and AI-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative z-10">
          <Header />
          <main className="relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

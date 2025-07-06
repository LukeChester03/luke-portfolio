import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/Components/Header";
import PageTransition from "@/Components/PageTransition";
import FlyTransition from "@/Components/FlyTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Chester Technologies",
  description: "A portfolio website made by Luke Chester",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} min-h-screen bg-primary overflow-y-auto`}>
        {/* Content wrapper: relative z-10 so content is above background */}
        <div className="relative z-10">
          <Header />
          <FlyTransition />
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}

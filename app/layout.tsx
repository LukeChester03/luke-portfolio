import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import FlyTransition from "@/components/ui/FlyTransition";

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
      <body className={jetBrainsMono.variable}>
        <Header />
        <FlyTransition />
        <PageTransition> {children}</PageTransition>
      </body>
    </html>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Overview from "@/Components/sections/Overview";
import Skills from "@/Components/sections/Skills";
import Experience from "@/Components/sections/Experience";

import PortfolioSection from "@/Components/sections/PortfolioSection";
import Contact from "@/Components/sections/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const ratio = Math.min(scrollY / maxScroll, 1);
      setScrollRatio(ratio);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to interpolate between two hex colors
  const interpolateColor = (start: string, end: string, factor: number) => {
    const hexToRgb = (hex: string) => hex.match(/\w\w/g)?.map((c) => parseInt(c, 16)) ?? [0, 0, 0];
    const rgbToHex = (rgb: number[]) =>
      `#${rgb.map((x) => x.toString(16).padStart(2, "0")).join("")}`;

    const startRgb = hexToRgb(start);
    const endRgb = hexToRgb(end);
    const result = startRgb.map((startC, i) => Math.round(startC + factor * (endRgb[i] - startC)));
    return rgbToHex(result as number[]);
  };

  const topColor = interpolateColor("#ebf8ff", "#003c75", scrollRatio); // light → darker blue
  const bottomColor = interpolateColor("#bde4ff", "#001930", scrollRatio); // light → navy

  const bgStyle = {
    background: `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)`,
    transition: "background 0.2s linear",
  };

  return (
    <main
      className="h-screen w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll pattern-bg"
      style={bgStyle}
    >
      <Overview />
      <Skills />
      <Experience />
      <PortfolioSection />
      <Contact />
      <Footer />
    </main>
  );
}

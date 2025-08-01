"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Work Experience" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const pathname = usePathname();

  useEffect(() => {
    // Only set up observer on the main page
    if (pathname !== "/") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // Use viewport as root
        rootMargin: "-20% 0px -20% 0px", // Consider section active when 20% from top and bottom
        threshold: 0.1, // Lower threshold for better detection
      }
    );

    const elements = sections.map((s) => document.getElementById(s.id));
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, [pathname]);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Only show navigation dots on the main page (root path)
  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className="relative group transition-all duration-300"
          aria-label={section.label}
        >
          <span
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id 
                ? "bg-accent scale-125 shadow-lg" 
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></span>
          <span className="absolute right-6 top-1/2 transform -translate-y-1/2 whitespace-nowrap text-sm bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-textPrimary border border-white/20">
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Header;

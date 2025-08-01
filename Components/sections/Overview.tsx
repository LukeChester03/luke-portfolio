"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/Button";
import Stats from "@/Components/Stats";
import Social from "@/Components/Social";
import { FiChevronRight, FiDownload, FiExternalLink, FiChevronDown } from "react-icons/fi";

const Overview: React.FC = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Hide scroll icon when user scrolls down more than 100px
      if (scrollY > 100) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCVDownload = () => {
    window.open("/Luke_Chester_Tech_CV.pdf", "_blank", "noopener,noreferrer");
  };

  const handleProjectsView = () => {
    const projectsSection = document.getElementById("portfolio");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="overview" className="h-screen snap-start flex flex-col justify-between relative">
      {/* Top content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 container mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-center items-center text-center max-w-6xl"
      >
     

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight break-words mb-4 text-textPrimary"
        >
          Hello! My name is <br />
          <span className="text-accent">Luke Chester</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-2 mb-6 text-sm sm:text-base md:text-lg xl:text-xl text-textSecondary max-w-2xl"
        >
          Specialising in web programming, app development and AI-powered solutions.
        </motion.p>

        {/* Buttons + Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 w-full max-w-xl"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:flex-1">
            <Button
              variant="outline"
              size="lg"
              className="text-sm sm:text-base px-6 py-3 uppercase gap-3 w-full sm:w-auto"
              onClick={handleCVDownload}
              rightIcon={<FiDownload className="text-xl" />}
            >
              <span>View CV</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-sm sm:text-base px-6 py-3 uppercase gap-3 w-full sm:w-auto"
              onClick={handleProjectsView}
              rightIcon={<FiExternalLink className="text-xl" />}
            >
              <span>View Projects</span>
            </Button>
          </div>

          <div className="flex justify-center sm:justify-end gap-4 sm:ml-auto">
            <Social
              containerStyles="flex gap-4"
              iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-500"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollIcon ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-8 h-8 border-2 border-accent rounded-full flex items-center justify-center"
        >
          <FiChevronDown className="text-accent text-sm" />
        </motion.div>
      </motion.div>

      {/* Stats pinned at bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="pb-4"
      >
        {/* <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <Stats />
        </div> */}
      </motion.div>
    </section>
  );
};

export default Overview;

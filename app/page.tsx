"use client";

import Stats from "@/Components/Stats";
import { Button } from "@/Components/Button";
import Social from "@/Components/Social";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      className="min-h-screen flex flex-col justify-between bg-primary-gradient"
    >
      {/* Main content with subtle background pattern */}
      <div className="flex-1 container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-36 sm:px-6 md:px-8 pattern-bg">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
          <span className="text-black/60 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium mb-4">
            Software Developer
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight break-words mb-6">
            Hello! My name is <br />
            <span className="text-accent">Luke Chester</span>
          </h1>

          <p className="mt-2 mb-10 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-textSecondary max-w-3xl mx-auto">
            Specialising in web programming, app development and AI-powered solutions.
          </p>

          {/* Buttons + Social (Responsive Row) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:flex-1">
              <Button
                variant="outline"
                size="lg"
                className="text-lg sm:text-xl px-6 py-3 uppercase gap-3 w-full sm:w-auto"
                onClick={() =>
                  window.open("/Luke_Chester_Tech_CV.pdf", "_blank", "noopener,noreferrer")
                }
              >
                <span>View CV</span>
                <FiChevronRight className="text-xl" />
              </Button>

              <Link href="/portfolio" passHref legacyBehavior>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg sm:text-xl px-6 py-3 uppercase gap-3 w-full sm:w-auto"
                >
                  <span>View Portfolio</span>
                  <FiChevronRight className="text-xl" />
                </Button>
              </Link>
            </div>

            {/* Social icons */}
            <div className="flex justify-center sm:justify-end gap-4 sm:ml-auto">
              <Social
                containerStyles="flex gap-4"
                iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center mt-14 sm:mt-16 lg:mt-20">
          <div className="w-full max-w-5xl">
            <Stats />
          </div>
        </div>
      </div>

      <Footer />
    </motion.section>
  );
};

export default Home;

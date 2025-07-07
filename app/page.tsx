"use client";
import Stats from "@/Components/Stats";
import { Button } from "@/Components/Button";
import Social from "@/Components/Social";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  const handleDownload = () => {
    const cvUrl = "/Luke_Chester_Tech_CV.pdf";
    window.open(cvUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="relative min-h-screen bg-primary"
    >
      {/* Main content with subtle background pattern */}
      <div className="relative z-10 container mx-auto py-12 bg-transparent pattern-bg">
        <div className="flex flex-col items-center justify-center xl:pt-8 xl:pb-24 bg-transparent max-w-3xl mx-auto text-center relative z-10">
          <span className="h2 pb-4 text-black/60 bg-transparent">Software Developer</span>
          <h1 className="h1 mb-8 bg-transparent">
            <span className="whitespace-nowrap">Hello! My name is</span>
            <br />
            <span className="text-accent bg-transparent">Luke Chester</span>
          </h1>
          <p className="mb-8 text-textSecondary bg-transparent h3">
            Specialising in web programming, app development and AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-transparent justify-center">
            <Button
              variant="outline"
              size="lg"
              className="uppercase gap-2 bg-transparent"
              onClick={handleDownload}
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
            <Social
              containerStyles={"flex gap-6 bg-transparent"}
              iconStyles={
                "w-9 h-9 border border-accent bg-transparent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              }
            />
          </div>
        </div>
        <Stats />
      </div>
      <Footer />
    </motion.section>
  );
};

export default Home;

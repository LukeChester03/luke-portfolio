"use client";

import Timeline from "@/Components/Timeline";
import { motion } from "framer-motion";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/Button";
import Link from "next/link";

const CV = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      className="snap-start min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 text-textPrimary py-16"
    >
      <div className="container mx-auto px-6 flex flex-col h-full">
        <h1 className="h1 mb-12 text-center text-textPrimary">Education & Experience</h1>

        <Timeline />
      </div>
    </motion.section>
  );
};

export default CV;

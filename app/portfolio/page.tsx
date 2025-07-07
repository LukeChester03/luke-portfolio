"use client";

import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PortfolioContent from "@/Components/PortfolioContent";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  return (
    <>
      <main className="min-h-screen bg-primary text-white">
        <motion.div
          animate={{ opacity: 1, transition: { delay: 3.4, duration: 0.4, ease: "easeIn" } }}
        >
          <PortfolioContent />
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;

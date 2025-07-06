"use client";

import React from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import PortfolioContent from "@/components/ui/PortfolioContent";

const PortfolioPage = () => {
  return (
    <>
      <main className="min-h-screen bg-primary text-white">
        <PortfolioContent />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;

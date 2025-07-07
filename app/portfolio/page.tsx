"use client";

import React from "react";
import PortfolioContent from "@/Components/PortfolioContent";
import Footer from "@/Components/Footer";

const PortfolioPage = () => {
  return (
    <main className="snap-y snap-mandatory bg-full-gradient h-screen w-screen overflow-y-scroll overflow-x-hidden">
      <PortfolioContent />
      <Footer />
    </main>
  );
};

export default PortfolioPage;

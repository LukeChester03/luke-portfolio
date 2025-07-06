"use client";

import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PortfolioContent from "@/Components/PortfolioContent";

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

"use client";
import Stats from "@/components/ui/Stats";
import { Button } from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Footer from "@/components/ui/Footer";

const Home = () => {
  const handleDownload = () => {
    const cvUrl = "/Luke_Chester_Tech_CV.pdf";
    window.open(cvUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen bg-primary">
      {/* Main content with transparent backgrounds */}
      <div className="relative z-10 container mx-auto py-12 bg-transparent">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 bg-transparent">
          <div className="text-center xl:text-left order-2 xl:order-none bg-transparent">
            <span className="h3 bg-transparent">Software Developer</span>
            <h1 className="h1 mb-8 bg-transparent">
              Hello! My name is
              <br />
              <span className="text-accent bg-transparent">Luke Chester</span>
            </h1>
            <p className="max-w-[500px] mb-8 text-white/80 bg-transparent">
              My hobby is creating innovative, modern websites and I am proficient in a range of
              programming languages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 bg-transparent">
              <Button
                variant="outline"
                size="lg"
                className="uppercase gap-2 bg-transparent"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 bg-transparent">
                <Social
                  containerStyles={"flex gap-6 bg-transparent"}
                  iconStyles={
                    "w-9 h-9 border border-accent bg-transparent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-[8px] xl:order-none bg-transparent">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
      <Footer />
    </section>
  );
};

export default Home;

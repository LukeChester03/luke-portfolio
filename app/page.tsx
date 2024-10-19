"use client";
import Stats from "@/components/ui/Stats";
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import React from "react";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/Luke-Chester-CV.pdf"; // Path to your CV PDF
    link.download = "Luke-Chester-CV.pdf"; // Name of the downloaded file
    link.click();
    console.log("Download CV");
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="h3">Software Developer</span>
            <h1 className="h1 mb-8">
              Hello! I'm
              <br />
              <span className="text-accent">Luke Chester</span>
            </h1>
            <p className="max-w-[500px mb-8 text-white/80">
              My hobby is creating innovative, modern websites and I am proficient in a range of
              programming languages and technologies
            </p>
            <div className=" flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-[8px] xl:order-none ">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default Home;

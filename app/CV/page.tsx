"use client";

import Timeline from "@/Components/Timeline";
import { motion } from "framer-motion";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/Button";
import Link from "next/link";

const CV = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-between py-12 xl:py-20 bg-primary-gradient text-textPrimary"
    >
      <div className="container mx-auto px-6 flex flex-col min-h-[70vh]">
        <div className="flex-grow">
          <h1 className="h1 mb-12 text-center text-textPrimary">My Experience & Projects</h1>
          <Timeline />
        </div>

        {/* Center the button */}
        <div className="flex justify-center mt-8 mb-8">
          <Link href={"/contact"}>
            <Button size={"lg"}>Reach out</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </motion.section>
  );
};

export default CV;

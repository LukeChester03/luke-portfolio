"use client";

import Timeline from "@/Components/Timeline";
import { motion } from "framer-motion";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/Button";
import Link from "next/link";

const CV = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-between py-12 xl:py-20 bg-primary text-textPrimary">
      <div className="container mx-auto px-6 flex flex-col min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2, duration: 0.8 } }}
          className="flex-grow"
        >
          <h1 className="h1 mb-12 text-center text-textPrimary">My Experience & Projects</h1>
          <Timeline />
        </motion.div>

        {/* Center the button */}
        <div className="flex justify-center mt-8">
          <Link href={"/contact"}>
            <Button>Reach out</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CV;

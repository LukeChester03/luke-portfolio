"use client";

import Timeline from "@/Components/Timeline";
import { motion } from "framer-motion";
import { Button } from "@/Components/Button";
import Footer from "@/Components/Footer";

const CV = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.8 } }}
        >
          <h1 className="h1 mb-12 text-center">My Experience & Projects</h1>
          <Timeline />
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default CV;

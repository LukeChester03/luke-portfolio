"use client";

import Timeline from "@/components/ui/Timeline";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const CV = () => {
  return (
    <section className="mind-h-80[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        >
          <Timeline />
        </motion.div>
      </div>
    </section>
  );
};

export default CV;

"use client";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

//components
import Fly from "./Fly";

const FlyTransition = () => {
  const [isInitialLoad, initialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      initialLoad(false);
    }
  }, [isInitialLoad]);
  const pathName = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Fly />
          </div>
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { delay: 1, duration: 0.3, ease: "easeInOut" } }}
          ></motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default FlyTransition;

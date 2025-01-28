import React, { useState } from "react";
import { motion } from "framer-motion";

const flyAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// reverse index for staggered delay
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return (totalSteps - index - 1) * 0.1;
};

const Fly = () => {
  return (
    <>
      {/* render six motion divs going bottom left to top right */}
      {[...Array(8)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={flyAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: reverseIndex(index), // Pass index to reverseIndex function
            }}
            className="h-full w-full bg-secondary relative"
          ></motion.div>
        );
      })}
    </>
  );
};

export default Fly;

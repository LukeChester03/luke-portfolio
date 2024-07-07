"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";

//components
import Fly from "./Fly";

const FlyTransition = () => {
  const pathName = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Fly />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default FlyTransition;
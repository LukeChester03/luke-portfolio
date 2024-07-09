"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden relative"
        >
          <Image
            src="/assets/pfp.png"
            priority
            quality={100}
            layout="fill"
            alt=""
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;

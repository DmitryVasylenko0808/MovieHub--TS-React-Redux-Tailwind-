import React from "react";
import { motion } from "framer-motion";

const loaderAnimations = {
  animate: {
    rotate: 360,
  },
  transition: {
    duration: 1.2,
    repeat: Infinity,
    repeatType: "loop" as "loop",
    ease: "linear",
  },
};

const Loader = () => {
  return (
    <div className="py-16 flex justify-center">
      <motion.div
        animate={loaderAnimations.animate}
        transition={loaderAnimations.transition}
        className="w-[110px] h-[110px] border-4 border-transparent border-r-indigo-600 rounded-full"
      />
    </div>
  );
};

export default Loader;

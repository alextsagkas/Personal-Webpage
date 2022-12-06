import { forwardRef } from "react";
import { motion } from "framer-motion";

import Introduction from "./Introduction";

const IntroAnimate = forwardRef(({ removePageHandler }, ref) => {
  return (
    <motion.div
      className="absolute z-20 bg-red-400 text-white"
      drag="y"
      dragConstraints={{ bottom: 0 }}
      dragElastic={0}
      dragTransition={{
        power: 2,
        bounceStiffness: 1000,
        bounceDamping: 100,
      }}
      whileDrag={{ scale: 1.02 }}
      onUpdate={() => {
        if (
          Math.abs(ref.current.getBoundingClientRect().y) > window.innerHeight
        ) {
          removePageHandler((latest) => !latest);
        }
      }}
    >
      <Introduction ref={ref} />
    </motion.div>
  );
});

export default IntroAnimate;

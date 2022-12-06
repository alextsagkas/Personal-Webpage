import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

import Introduction from "./Introduction";

const IntroAnimate = forwardRef(({ removePageHandler, toolBarHidden }, ref) => {
  const [isDraggedDown, isDraggedDownHandler] = useState(true);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-20 bg-bgLight-50 dark:bg-bgDark-900"
        drag="y"
        dragConstraints={{ bottom: 0 }}
        dragElastic={0}
        dragTransition={{
          power: 2,
          bounceStiffness: 1000,
          bounceDamping: 100,
        }}
        whileDrag={{ scale: 0.99 }}
        onUpdate={() => {
          if (ref.current.getBoundingClientRect().y > 1) {
            isDraggedDownHandler(true);
          } else {
            isDraggedDownHandler(false);
          }

          if (
            Math.abs(ref.current.getBoundingClientRect().y) > window.innerHeight
          ) {
            removePageHandler((latest) => !latest);
          }
        }}
      >
        <Introduction toolBarHidden={toolBarHidden} ref={ref} />
      </motion.div>
      {isDraggedDown ? (
        <div className="fixed top-0 left-0 z-10 h-[99%] w-screen bg-bgLight-50 dark:bg-bgDark-900"></div>
      ) : null}
    </>
  );
});

export default IntroAnimate;

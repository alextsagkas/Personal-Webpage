import { forwardRef } from "react";
import { motion } from "framer-motion";

import Introduction from "../helpers/Introduction";

const IntroSlider = forwardRef(
  (
    { removePageHandler, toolBarHidden, isDraggedDown, isDraggedDownHandler },
    ref
  ) => {
    return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-20 min-h-screen w-screen bg-bgLight-50 dark:bg-bgDark-900"
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
          // Anything that is not an actual upward slide counts as "down":
          // resting at 0 and the bounce past it both have to keep the page
          // underneath hidden, not just an overshoot below the top edge.
          isDraggedDownHandler(ref.current.getBoundingClientRect().y > -1);

          if (
            Math.abs(ref.current.getBoundingClientRect().y) >
            window.innerHeight
          ) {
            removePageHandler((latest) => !latest);
          }
        }}
      >
        <Introduction toolBarHidden={toolBarHidden} ref={ref} />
      </motion.div>
      {/* Helper Div so as not to display the background when dragged downwards */}
      {isDraggedDown ? (
        <div className="fixed inset-0 z-10 min-h-screen w-screen bg-bgLight-50 dark:bg-bgDark-900"></div>
      ) : null}
    </>
    );
  }
);

export default IntroSlider;

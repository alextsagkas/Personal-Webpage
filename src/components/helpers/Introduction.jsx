import { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";

const Introduction = forwardRef(({ toolBarHidden }, ref) => {
  return (
    <section
      ref={ref}
      className="flex h-screen w-screen flex-col items-center justify-center text-center"
    >
      <div className="h-full" />
      <h1 className="mb-2 px-7 text-4xl font-bold dark:text-white md:mb-3 md:text-7xl">
        Alexandros Tsagkaropoulos
      </h1>
      <p className="mb-6 text-base font-semibold md:text-xl">
        Physics Student & Software Engineer
      </p>
      <p className="mb-6 max-w-xl px-7 text-sm font-medium">
        I'm a Bachelor Physics Student trying to figure out the world we live
        in. I specialize in Computer Science and I seek to apply my knowledge to
        Software Development Projects. All projects I undertake are carefully
        outlined, designed and implemented to solve real world problems
        efficiently and elegantly.
      </p>
      <div className="h-full" />
      <motion.div
        className="mb-1 text-xs text-bgDark-900 dark:text-white md:mb-3 md:text-sm "
        animate={{ y: -4 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          transition: "easeIn",
        }}
      >
        Swipe Up
      </motion.div>
      <div
        className={`${
          toolBarHidden ? "mb-6" : "mb-24"
        } h-6 w-[35%] rounded-md bg-bgDark-900 dark:bg-white sm:mb-10`}
      ></div>
    </section>
  );
});

export default Introduction;

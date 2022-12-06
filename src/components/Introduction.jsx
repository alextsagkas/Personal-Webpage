import { forwardRef } from "react";

const Introduction = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex h-screen w-screen flex-col items-center justify-center px-2 text-center"
    >
      <div className="h-full" />
      <h1 className="mb-2 text-4xl font-bold dark:text-white md:mb-3 md:text-7xl">
        Alexandros Tsagkaropoulos
      </h1>
      <p className="mb-6 text-base font-semibold md:text-xl">
        Physics Student & Developer
      </p>
      <p className="mb-6 max-w-xl text-sm font-medium">
        I'm a Bachelor Physics Student trying to figure out the world we live
        in. I specialize in Electronics and Computers and I seek to apply my
        knowledge to Software Development Projects. All Software Engineering
        Projects are carefully outlined, designed and implemented to solve real
        world problems efficiently.
      </p>
      <div className="h-full" />
      <div className="mb-2">Swipe Up</div>
      <div className="mb-5 h-5 w-44 rounded-md bg-white "></div>
    </section>
  );
});

export default Introduction;

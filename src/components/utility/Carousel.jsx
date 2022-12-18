import React, { useState } from "react";
import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children }) => {
  return (
    <div className="inline-flex w-[100%] items-center justify-center lg:w-[50%] 2xl:w-[33.33%]">
      {children}
    </div>
  );
};

const Carousel = ({ children, homeScreenVisible, scrollY }) => {
  const childrenNumber = React.Children.count(children);

  const stopPixel = 250;
  // TailwindCSS default values
  const lg = 1024;
  const doubleXl = 1536;

  const [windowWidth, windowWidthHandler] = useState(window.innerWidth);
  const [activeIndex, activeIndexHandler] = useState(0);
  const [pause, pauseHandler] = useState(false);
  const [itemsOnScreen, itemsOnScreenHandler] = useState(1);
  const [pageNumber, pageNumberHandler] = useState(childrenNumber);

  // Pause Carousel when scrolling beyond the Section
  useEffect(() => {
    if (scrollY > stopPixel) {
      pauseHandler(true);
    } else {
      pauseHandler(false);
    }
  }, [scrollY]);

  // Set the activeIndex & pageNumber depending on windowWidth
  useEffect(() => {
    function handleWindowResize() {
      windowWidthHandler(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    if (windowWidth < lg) {
      activeIndexHandler(0);
      itemsOnScreenHandler(1);
      pageNumberHandler(childrenNumber);
    }

    if (windowWidth > lg && windowWidth < doubleXl) {
      activeIndexHandler(0);
      itemsOnScreenHandler(2);
      pageNumberHandler(Math.ceil(childrenNumber / 2));
    }

    if (windowWidth > doubleXl) {
      activeIndexHandler(0);
      itemsOnScreenHandler(3);
      pageNumberHandler(Math.ceil(childrenNumber / 3));
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  // Pause Carousel when there are no pages to slide
  useEffect(() => {
    if (childrenNumber <= itemsOnScreen) {
      pauseHandler(true);
    } else {
      pauseHandler(false);
    }
  }, [itemsOnScreen]);

  // Pause Carousel if the Home is visible
  useEffect(() => {
    if (homeScreenVisible) {
      pauseHandler(true);
    } else {
      pauseHandler(false);
    }
  }, [homeScreenVisible]);

  // Carousel Animation
  useEffect(() => {
    if (!pause) {
      const interval = setInterval(() => {
        updateIndex(activeIndex + 1);
      }, 2500);

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
  }, [activeIndex, pause, windowWidth]);

  //  Swipe Carousel on phone screens
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  // Update Index with loop
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = pageNumber - 1;
    } else if (newIndex > pageNumber - 1) {
      newIndex = 0;
    }
    activeIndexHandler(newIndex);
  };

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);

  return (
    <div className="overflow-hidden">
      <div
        {...handlers}
        onMouseEnter={() => pauseHandler(true)}
        onMouseLeave={() => pauseHandler(false)}
        className={`whitespace-nowrap transition-transform duration-700`}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return child;
        })}
      </div>
      <div className="mt-6 flex items-center justify-center">
        <div className="flex w-9/12 flex-row flex-wrap justify-center gap-y-4 gap-x-5 min-[320px]:w-7/12 min-[390px]:w-5/12 min-[500px]:w-4/12">
          {React.Children.map(children, (child, index) => {
            return index < pageNumber ? (
              <button
                className={`h-4 w-4 rounded-full ${
                  activeIndex === index
                    ? "bg-bgDark-500 dark:bg-bgDark-400"
                    : "bg-bgDark-300 dark:bg-bgDark-600"
                }`}
                onClick={() => {
                  updateIndex(index);
                }}
              />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

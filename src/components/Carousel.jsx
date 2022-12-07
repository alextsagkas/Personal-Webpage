import React, { useState } from "react";
import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children }) => {
  return (
    <div
      className={`inline-flex w-[100%] items-center justify-center lg:w-[50%] 2xl:w-[33.33%]`}
    >
      {children}
    </div>
  );
};

const Carousel = ({ children, homeScreenVisible }) => {
  const childrenNumber = React.Children.count(children);
  const lg = 1024;
  const doubleXl = 1536;

  const [windowWidth, windowWidthHandler] = useState(window.innerWidth);
  const [activeIndex, activeIndexHandler] = useState(0);
  const [pause, pauseHandler] = useState(false);
  const [itemsOnScreen, itemsOnScreenHandler] = useState(1);
  const [pageNumber, pageNumberHandler] = useState(childrenNumber);

  useEffect(() => {
    function handleWindowResize() {
      windowWidthHandler(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < lg) {
      activeIndexHandler(0);
      itemsOnScreenHandler(1);
      pageNumberHandler(Math.ceil(childrenNumber));
    }

    if (windowWidth > lg && windowWidth < doubleXl) {
      activeIndexHandler(0);
      itemsOnScreenHandler(2);
      pageNumberHandler(Math.ceil(childrenNumber / itemsOnScreen));
    }

    if (windowWidth > doubleXl) {
      activeIndexHandler(0);
      itemsOnScreenHandler(3);
      pageNumberHandler(Math.ceil(childrenNumber / itemsOnScreen));
    }
  }, [windowWidth]);

  useEffect(() => {
    if (homeScreenVisible) {
      pauseHandler(true);
    } else {
      pauseHandler(false);
    }
  }, [homeScreenVisible]);

  useEffect(() => {
    if (!pause) {
      const interval = setInterval(() => {
        updateIndex(activeIndex + 1);
      }, 2000);

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
  }, [activeIndex, pause, windowWidth]);

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = pageNumber - 1;
    } else if (newIndex > pageNumber - 1) {
      newIndex = 0;
    }

    activeIndexHandler(newIndex);
  };

  return (
    <div className="overflow-hidden">
      <div
        {...handlers}
        onMouseEnter={() => pauseHandler(true)}
        onMouseLeave={() => pauseHandler(false)}
        className={`whitespace-nowrap transition-transform duration-700`}
        style={{
          transform: `translateX(-${
            Math.ceil(activeIndex / itemsOnScreen) * 100
          }%)`,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return child;
        })}
      </div>
      <div className="mt-5 flex items-center justify-center">
        <button
          className="rounded-md bg-bgDark-300 p-1 text-black"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <div className="mx-4 flex flex-row gap-4">
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
        <button
          className="rounded-md bg-bgDark-300 p-1 text-black"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;

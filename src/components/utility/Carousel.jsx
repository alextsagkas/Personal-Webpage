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
  const nonRepeatingChildrenNumber = childrenNumber - 2;

  const stopPixel = 250;
  // TailwindCSS default values
  const lg = 1024;
  const doubleXl = 1536;

  const [windowWidth, windowWidthHandler] = useState(window.innerWidth);
  const [activeIndex, activeIndexHandler] = useState(1);
  const [pause, pauseHandler] = useState(false);
  const [itemsOnScreen, itemsOnScreenHandler] = useState(1);
  const [pageNumber, pageNumberHandler] = useState(childrenNumber);
  const [infiniteLoop, infiniteLoopHandler] = useState(false);
  const [swipedRight, swipedRightHandler] = useState(false);
  const [swipedLeft, swipedLeftHandler] = useState(false);

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
      activeIndexHandler(1);
      itemsOnScreenHandler(1);
      pageNumberHandler(childrenNumber);
    }

    if (windowWidth > lg && windowWidth < doubleXl) {
      activeIndexHandler(1);
      itemsOnScreenHandler(2);
      pageNumberHandler(Math.ceil(childrenNumber / 2));
    }

    if (windowWidth > doubleXl) {
      activeIndexHandler(1);
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

  // Illusion for infinite loop - Disable Swipe Animation
  useEffect(() => {
    if (
      (activeIndex == pageNumber - 1 && swipedLeft) ||
      (activeIndex == 0 && swipedRight)
    ) {
      const timeout = setTimeout(() => {
        infiniteLoopHandler(true);
        return clearTimeout(timeout);
      }, 700);
    } else {
      infiniteLoopHandler(false);
    }
  }, [activeIndex]);

  // Illusion for infinite loop - Active Index Cycle
  useEffect(() => {
    if (infiniteLoop) {
      if (activeIndex == pageNumber - 1) {
        updateIndex(1);
      } else {
        updateIndex(pageNumber - 2);
      }
    }
  }, [infiniteLoop]);

  //  Swipe Carousel on phone screens
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      swipedRightHandler(false);
      swipedLeftHandler(true);
      updateIndex(activeIndex + 1);
    },
    onSwipedRight: () => {
      swipedLeftHandler(false);
      swipedRightHandler(true);
      updateIndex(activeIndex - 1);
    },
  });

  // Update Index with loop
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > pageNumber - 1) {
      newIndex = pageNumber - 1;
    }
    activeIndexHandler(newIndex);
  };

  // Cycle thought activeIndexes
  const carouselIndex = (index) => {
    if (index == 0) {
      return pageNumber - 2;
    } else if (index == pageNumber - 1) {
      return 1;
    } else {
      return index;
    }
  };

  const translateBullets = () => {
    // No need to translate when we have less than 5 items
    if (nonRepeatingChildrenNumber <= 5) {
      return "";
    }

    if (nonRepeatingChildrenNumber > 5) {
      //  Do not translate on start
      if (activeIndex <= 3 && activeIndex != 0) {
        return "";
      }

      // Do not translate on end
      if (
        activeIndex >= nonRepeatingChildrenNumber - 2 &&
        activeIndex != nonRepeatingChildrenNumber + 1
      ) {
        return `translateX(-${(nonRepeatingChildrenNumber - 5) * 30}px)`;
      }

      // Loops' end - Right translation
      if (activeIndex == nonRepeatingChildrenNumber + 1) {
        return "";
      }

      // Loops' start - Left translation
      if (activeIndex == 0) {
        return `translateX(-${(nonRepeatingChildrenNumber - 5) * 30}px)`;
      }

      // Translate Left

      return `translateX(-${(activeIndex - 3) * 30}px)`;
    }
  };

  const smallNonActiveButtonConditions = (index) => {
    return (
      // Right side of activeIndex - middle
      (index - activeIndex === 1 &&
        activeIndex > 3 &&
        activeIndex <= nonRepeatingChildrenNumber - 3) ||
      // Right side of activeIndex - start
      (activeIndex <= 3 && index === 4) ||
      (activeIndex == nonRepeatingChildrenNumber + 1 && index === 4) ||
      // Left side of activeIndex - middle
      (nonRepeatingChildrenNumber - activeIndex >= 3 &&
        activeIndex >= 4 &&
        index === activeIndex - 1) ||
      // Left side of activeIndex - start
      (nonRepeatingChildrenNumber - activeIndex <= 3 &&
        index === nonRepeatingChildrenNumber - 3) ||
      (activeIndex == 0 && index === nonRepeatingChildrenNumber - 3)
    );
  };

  const extraSmallNonActiveButtonConditions = (index) => {
    return (
      // Right side of activeIndex - Middle
      (index - activeIndex >= 2 &&
        activeIndex > 3 &&
        activeIndex != 0 &&
        activeIndex < nonRepeatingChildrenNumber - 3) ||
      (activeIndex == nonRepeatingChildrenNumber - 3 &&
        index === nonRepeatingChildrenNumber - 1) ||
      // Right side of activeIndex - Start
      (activeIndex <= 3 && activeIndex != 0 && index >= 5) ||
      // Right side of activeIndex - Start Loop
      (activeIndex == nonRepeatingChildrenNumber + 1 && index === 5) ||
      // Left side of activeIndex - Middle
      (nonRepeatingChildrenNumber - activeIndex >= 3 &&
        activeIndex > 4 &&
        activeIndex != 0 &&
        index <= activeIndex - 2) ||
      (activeIndex === 4 && index === 2) ||
      // Left side of activeIndex - Start
      (nonRepeatingChildrenNumber - activeIndex <= 3 &&
        activeIndex != nonRepeatingChildrenNumber + 1 &&
        index <= nonRepeatingChildrenNumber - 4 &&
        index != 1) ||
      // Left side of activeIndex - Start Loop
      (activeIndex == 0 && index === nonRepeatingChildrenNumber - 4) ||
      // Middle Loop
      (nonRepeatingChildrenNumber >= 11 &&
        index >= 5 &&
        index <= nonRepeatingChildrenNumber - 4 &&
        (activeIndex == 0 ||
          activeIndex == nonRepeatingChildrenNumber + 1 ||
          activeIndex == 1 ||
          activeIndex == nonRepeatingChildrenNumber))
    );
  };

  return (
    <div className="overflow-hidden">
      <div
        {...handlers}
        onMouseEnter={() => pauseHandler(true)}
        onMouseLeave={() => pauseHandler(false)}
        className={`whitespace-nowrap ${
          infiniteLoop ? "" : "transition-transform duration-700"
        }`}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return child;
        })}
      </div>

      <div className="mx-auto mt-6 w-[150px] overflow-hidden">
        <div
          className={`whitespace-nowrap ${
            infiniteLoop ? "" : "transition-transform duration-700"
          }`}
          style={{
            transform: translateBullets(),
          }}
        >
          {React.Children.map(children, (child, index) => {
            if (index > 0 && index < pageNumber - 1) {
              if (index === carouselIndex(activeIndex)) {
                return <ActiveButton key={index} />;
              } else {
                if (smallNonActiveButtonConditions(index)) {
                  return <NonActiveButtonS key={index} />;
                } else if (extraSmallNonActiveButtonConditions(index)) {
                  return <NonActiveButtonXS key={index} />;
                } else {
                  return <NonActiveButton key={index} />;
                }
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

// {
//   React.Children.map(children, (child, index) => {
//     if (index < pageNumber - 1 && index > 0 && index <= 6) {
//       if (index === carouselIndex(activeIndex)) {
//         return <ActiveButton />;
//       }

//       if (index !== carouselIndex(activeIndex)) {
//         if (nonRepeatingChildrenNumber <= 5) {
//           return <NonActiveButton />;
//         }

//         if (nonRepeatingChildrenNumber <= 6) {
//           if (index === 7) {
//             return <NonActiveButtonS />;
//           } else {
//             return <NonActiveButtonXS />;
//           }
//         }
//       }
//     }
//   });
// }

// // Carousel Animation
// useEffect(() => {
//   if (!pause) {
//     var delay;

//     if (activeIndex == pageNumber - 1 || activeIndex == 0) {
//       delay = 700;
//     } else if (
//       (activeIndex == 1 && !swipedLeft) ||
//       (activeIndex == pageNumber - 2 && swipedRight)
//     ) {
//       delay = 1800;
//     } else {
//       delay = 2500;
//     }

//     const interval = setInterval(() => {
//       updateIndex(activeIndex + direction);
//     }, delay);

//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   }
// }, [activeIndex, pause, windowWidth]);

export const ActiveButton = (key) => (
  <div className="inline-block w-[30px] text-center">
    <button
      key={key}
      className={"h-3 w-3 rounded-full bg-bgDark-500 dark:bg-bgDark-400"}
    />
  </div>
);

export const NonActiveButton = (key) => (
  <div className="inline-block w-[30px] text-center">
    <button
      key={key}
      className={"h-3 w-3 rounded-full bg-bgDark-300 dark:bg-bgDark-600"}
    />
  </div>
);
export const NonActiveButtonS = (key) => (
  <div className="inline-block w-[30px] text-center">
    <button
      key={key}
      className={"h-2 w-2 rounded-full bg-bgDark-300 dark:bg-bgDark-600"}
    />
  </div>
);

export const NonActiveButtonXS = (key) => (
  <div className="inline-block w-[30px] text-center">
    <button
      key={key}
      className={"h-1 w-1 rounded-full bg-bgDark-300 dark:bg-bgDark-600"}
    />
  </div>
);

export default Carousel;

import React, { useState, useEffect } from "react";

import { LeftArrow, RightArrow } from "../icons/Icons";

export const CarouselBigScreensItem = ({ children }) => {
  return (
    <div className="inline-flex w-[100%] items-center justify-center lg:w-[50%] 2xl:w-[33.33%]">
      {children}
    </div>
  );
};

const CarouselBigScreens = ({ children }) => {
  const childrenNumber = React.Children.count(children);

  // TailwindCSS default values
  const lg = 1024;
  const doubleXl = 1536;

  const [activeIndex, activeIndexHandler] = useState(0);
  const [itemsOnScreen, itemsOnScreenHandler] = useState(0);
  const [pageNumber, pageNumberHandler] = useState(childrenNumber);
  const [windowWidth, windowWidthHandler] = useState(window.innerWidth);

  // Update windowWidth & set pageNumber
  useEffect(() => {
    function handleWindowResize() {
      windowWidthHandler(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

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

  // Translate bullets' Carousel
  const translateBullets = () => {
    // No need to translate when we have less than 5 items
    if (pageNumber <= 5) {
      return "";
    }

    if (pageNumber > 5) {
      //  Do not translate on start
      if (activeIndex <= 2) {
        return "";
      }

      // Do not translate on end
      if (activeIndex >= pageNumber - 3) {
        return `translateX(-${(pageNumber - 5) * 30}px)`;
      }

      // Translate Left
      return `translateX(-${(activeIndex - 2) * 30}px)`;
    }
    return "";
  };

  // Conditions to display small inactive button
  const smallNonActiveButtonConditions = (index) => {
    if (pageNumber <= 5) {
      return false;
    }

    return (
      // Right side of activeIndex - middle
      (index - activeIndex === 1 &&
        activeIndex > 2 &&
        activeIndex <= pageNumber - 4) ||
      // Right side of activeIndex - start
      (activeIndex <= 2 && index === 3) ||
      // Left side of activeIndex - middle
      (pageNumber - activeIndex > 3 &&
        activeIndex >= 3 &&
        index === activeIndex - 1) ||
      // Left side of activeIndex - start
      (pageNumber - activeIndex <= 3 && index === pageNumber - 4)
    );
  };

  // Conditions to display extra small inactive button
  const extraSmallNonActiveButtonConditions = (index) => {
    if (pageNumber <= 5) {
      return false;
    }

    return (
      // Right side of activeIndex - Middle
      (index - activeIndex >= 2 &&
        activeIndex > 2 &&
        activeIndex < pageNumber - 3 &&
        index != pageNumber - 1) ||
      // Right side of activeIndex - Start
      (activeIndex <= 2 && index >= 4) ||
      // Left side of activeIndex - Middle
      (pageNumber - activeIndex > 3 &&
        activeIndex >= 3 &&
        index <= activeIndex - 2 &&
        index != 0) ||
      // Left side of activeIndex - Start
      (pageNumber - activeIndex <= 3 && index <= pageNumber - 5)
    );
  };

  const ActiveButton = ({ index }) => (
    <div className="inline-block w-[30px] text-center">
      <button
        key={index}
        className={
          "h-[0.78rem] w-[0.78rem] rounded-full bg-bgDark-500 align-middle dark:bg-bgDark-400"
        }
      />
    </div>
  );

  const NonActiveButton = ({ index }) => (
    <div className="inline-block w-[30px] text-center">
      <button
        key={index}
        onClick={() => activeIndexHandler(index)}
        className={
          "h-3 w-3 rounded-full bg-bgDark-300 align-middle dark:bg-bgDark-600"
        }
      />
    </div>
  );

  const NonActiveButtonS = ({ index }) => (
    <div className="inline-block w-[30px] text-center">
      <button
        key={index}
        onClick={() => activeIndexHandler(index)}
        className={
          "h-2 w-2 rounded-full bg-bgDark-300 align-middle dark:bg-bgDark-600"
        }
      />
    </div>
  );

  const NonActiveButtonXS = ({ index }) => (
    <div className="inline-block w-[30px] text-center">
      <button
        key={index}
        onClick={() => activeIndexHandler(index)}
        className={
          "h-1 w-1 rounded-full bg-bgDark-300 align-middle dark:bg-bgDark-600"
        }
      />
    </div>
  );

  return (
    // Carousel
    <div className="overflow-hidden">
      <div
        className={"whitespace-nowrap transition-transform duration-[600ms]"}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return child;
        })}
      </div>
      {/* Bullets */}
      <div className="mt-10 flex flex-row justify-center gap-8">
        <button
          className={`${
            activeIndex === 0
              ? "text-bgDark-400 dark:text-bgDark-500"
              : "text-bgDark-500 dark:text-bgDark-400"
          }`}
          onClick={() => {
            if (activeIndex === 0) {
              return;
            }
            activeIndexHandler(activeIndex - 1);
          }}
        >
          <LeftArrow />
        </button>
        <div
          className={`h-fit overflow-hidden ${
            pageNumber >= 5 ? "w-[150px]" : ""
          }`}
        >
          <div
            className={
              "whitespace-nowrap transition-transform duration-[600ms]"
            }
            style={{
              transform: translateBullets(),
            }}
          >
            {React.Children.map(children, (child, index) => {
              if (index < pageNumber) {
                if (index === activeIndex) {
                  return <ActiveButton index={index} />;
                } else {
                  if (smallNonActiveButtonConditions(index)) {
                    return <NonActiveButtonS index={index} />;
                  } else if (extraSmallNonActiveButtonConditions(index)) {
                    return <NonActiveButtonXS index={index} />;
                  } else {
                    return <NonActiveButton index={index} />;
                  }
                }
              }
            })}
          </div>
        </div>
        <button
          className={`${
            activeIndex === pageNumber - 1
              ? "text-bgDark-400 dark:text-bgDark-500"
              : "text-bgDark-500 dark:text-bgDark-400"
          }`}
          onClick={() => {
            if (activeIndex === pageNumber - 1) {
              return;
            }
            activeIndexHandler(activeIndex + 1);
          }}
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default CarouselBigScreens;

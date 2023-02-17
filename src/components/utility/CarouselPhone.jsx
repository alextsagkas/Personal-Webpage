import React, { useState } from "react";
import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselPhoneItem = ({ children }) => {
  return (
    <div className="inline-flex w-[100%] items-center justify-center">
      {children}
    </div>
  );
};

const CarouselPhone = ({ children }) => {
  const childrenNumber = React.Children.count(children);
  const nonRepeatingChildrenNumber = childrenNumber - 2;

  const [activeIndex, activeIndexHandler] = useState(1);
  const [infiniteLoop, infiniteLoopHandler] = useState(false);
  const [swipedRight, swipedRightHandler] = useState(false);
  const [swipedLeft, swipedLeftHandler] = useState(false);

  // Illusion for infinite loop - Disable Swipe Animation
  useEffect(() => {
    if (
      (activeIndex == childrenNumber - 1 && swipedLeft) ||
      (activeIndex == 0 && swipedRight)
    ) {
      setTimeout(() => {
        infiniteLoopHandler(true);
      }, 600);
    } else {
      setTimeout(() => {
        infiniteLoopHandler(false);
      }, 10);
    }
  }, [activeIndex]);

  // Illusion for infinite loop - Active Index Cycle
  useEffect(() => {
    if (infiniteLoop) {
      if (activeIndex == childrenNumber - 1) {
        updateIndex(1);
      } else {
        updateIndex(childrenNumber - 2);
      }
    }
  }, [infiniteLoop]);

  //  Swipe Carousel on phone screens
  const handlers = useSwipeable({
    preventScrollOnSwipe: true,
    onSwipedLeft: () => {
      if (activeIndex == childrenNumber - 1 || activeIndex == 0) {
        return;
      }
      swipedRightHandler(false);
      swipedLeftHandler(true);
      updateIndex(activeIndex + 1);
    },
    onSwipedRight: () => {
      if (activeIndex == childrenNumber - 1 || activeIndex == 0) {
        return;
      }
      swipedLeftHandler(false);
      swipedRightHandler(true);
      updateIndex(activeIndex - 1);
    },
  });

  // Update Index with loop
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > childrenNumber - 1) {
      newIndex = childrenNumber - 1;
    }
    activeIndexHandler(newIndex);
  };

  // Cycle thought activeIndexes
  const carouselIndex = (index) => {
    if (index == 0) {
      return childrenNumber - 2;
    } else if (index == childrenNumber - 1) {
      return 1;
    } else {
      return index;
    }
  };

  // Translate bullets' Carousel
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

  // Conditions to display small inactive button
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

  // Conditions to display extra small inactive button
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
        onClick={() => updateIndex(index)}
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
        onClick={() => updateIndex(index)}
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
        onClick={() => updateIndex(index)}
        className={
          "h-1 w-1 rounded-full bg-bgDark-300 align-middle dark:bg-bgDark-600"
        }
      />
    </div>
  );

  return (
    <div className="overflow-hidden">
      <div
        {...handlers}
        className={`whitespace-nowrap ${
          infiniteLoop ? "" : "transition-transform duration-[600ms]"
        }
          `}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return child;
        })}
      </div>
      <div className="mx-auto mt-6 h-fit w-[150px] overflow-hidden">
        <div
          className={`whitespace-nowrap ${
            infiniteLoop ? "" : "transition-transform duration-[600ms]"
          }`}
          style={{
            transform: translateBullets(),
          }}
        >
          {React.Children.map(children, (child, index) => {
            if (index > 0 && index < childrenNumber - 1) {
              if (index === carouselIndex(activeIndex)) {
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
    </div>
  );
};

export default CarouselPhone;

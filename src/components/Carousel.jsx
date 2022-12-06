import React, { useState } from "react";
import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={`inline-flex w-[${width}] items-center justify-center`}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, activeIndexHandler] = useState(0);
  const [pause, pauseHandler] = useState(false);

  //   useEffect(() => {
  //     if (!pause) {
  //       const interval = setInterval(() => {
  //         updateIndex(activeIndex + 1);
  //       }, 1000);

  //       console.log(activeIndex);

  //       return () => {
  //         if (interval) {
  //           clearInterval(interval);
  //         }
  //       };
  //     }
  //   }, [activeIndex, pause]);

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  // TODO:Pause when intro page is removed

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex > React.Children.count(children) - 1) {
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
        className="duration-400 whitespace-nowrap transition-transform"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
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
            return (
              <button
                className={`h-4 w-4 rounded-full ${
                  activeIndex === index ? "bg-bgDark-400" : "bg-bgDark-600"
                }`}
                onClick={() => {
                  updateIndex(index);
                }}
              />
            );
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

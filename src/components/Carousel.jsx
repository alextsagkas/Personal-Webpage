import React, { useState } from "react";
import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, width }) => {
  return (
    <div
      className="inline-flex h-20 items-center justify-center bg-green-500 text-white"
      style={{ width: width }}
    >
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
    <div className="my-5 overflow-hidden">
      <div
        {...handlers}
        onMouseEnter={() => pauseHandler(true)}
        onMouseLeave={() => pauseHandler(false)}
        className="whitespace-nowrap transition-transform duration-300"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="flex justify-center">
        <button
          className="m-3 rounded-md bg-green-100 p-1 text-black"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${
                activeIndex === index ? "bg-green-400" : ""
              } m-1 rounded-md bg-green-100 px-2 text-black`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          className="m-3 rounded-md bg-green-100 p-1 text-black"
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

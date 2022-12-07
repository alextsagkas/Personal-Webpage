import { forwardRef } from "react";

import timeline from "../data/timeline";
import TimeLineItem from "./TimeLineItem";
import Title from "./Title";

const TimeLine = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="mx-auto flex w-11/12 max-w-5xl flex-col justify-center px-4 md:w-8/12 md:flex-row"
    >
      <div>
        <Title>Timeline</Title>
        {timeline.map((event) => (
          <TimeLineItem
            key={event.id}
            year={event.year}
            title={event.title}
            duration={event.duration}
            details={event.details}
          />
        ))}
      </div>
    </section>
  );
});

export default TimeLine;

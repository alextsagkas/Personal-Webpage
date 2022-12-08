import { forwardRef } from "react";

import timeline from "../../data/timeline";
import TimeLineItem from "../helpers/TimeLineItem";
import Title from "../utility/Title";

const TimeLine = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="flex flex-col justify-center">
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

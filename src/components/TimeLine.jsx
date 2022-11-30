import timeline from "../data/timeline";
import TimeLineItem from "./TimeLineItem";

function TimeLine() {
  return (
    <section className="flex flex-col md:flex-row justify-center my-20">
      <div className="px-4 w-full md:w-7/12">
        {timeline.map((event) => (
          <TimeLineItem
            year={event.year}
            title={event.title}
            duration={event.duration}
            details={event.details}
          />
        ))}
      </div>
    </section>
  );
}

export default TimeLine;

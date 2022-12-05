import timeline from "../data/timeline";
import TimeLineItem from "./TimeLineItem";
import Title from "./Title";

function TimeLine() {
  return (
    <section className="my-20 flex flex-col justify-center md:flex-row">
      <div className="w-full px-4 md:w-7/12">
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
}

export default TimeLine;

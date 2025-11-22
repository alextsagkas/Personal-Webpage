import {forwardRef} from "react";

import education from "../../data/education";
import Title from "../utility/Title";
import GenericItem from "../helpers/GenericItem.jsx";
import DetailsDictRenderer from "../helpers/DetailsDictRenderer.jsx";

const Education = forwardRef((props, ref) => {
  return (<section ref={ref} className="flex flex-col justify-center">
    <div>
      <Title>Education</Title>
      {education.map((event) => (
        <GenericItem
          key={event.id}
          year={event.year}
          title={event.title}
          subtitle={event.subtitle}
          details={event.details}
          DetailsRenderer={DetailsDictRenderer}
        />
      ))}
    </div>
  </section>);
});

export default Education;

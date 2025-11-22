import {forwardRef} from "react";

import employment from "../../data/employment.js";
import Title from "../utility/Title";
import GenericItem from "../helpers/GenericItem.jsx";
import DetailsListRenderer from "../helpers/DetailsListRenderer.jsx";

const Employment = forwardRef((props, ref) => {
  return (<section ref={ref} className="flex flex-col justify-center">
    <div>
      <Title>Employment</Title>
      {employment.map((event) => (
        <GenericItem
          key={event.id}
          year={event.year}
          title={event.title}
          subtitle={event.subtitle}
          details={event.details}
          DetailsRenderer={DetailsListRenderer}
        />
      ))}
    </div>
  </section>);
});

export default Employment;

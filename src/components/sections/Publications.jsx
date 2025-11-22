import {forwardRef} from "react";

import references from "../../data/references.js"
import Title from "../utility/Title";
import PublicationItem from "../helpers/PublicationItem.jsx";

const Publications = forwardRef((props, ref) => {
  return (<section ref={ref} className="flex flex-col justify-center">
    <div>
      <Title>Publications</Title>
      {references.map((reference) => (
        <div className="mb-4 last:mb-0">
          <div
            key={reference.id}
            className="text-xl mb-3 font-semibold text-bgDark-800 dark:text-bgDark-100">
            {reference.category}
          </div>
          {reference.elements.map((element) => (
            <PublicationItem
              index={element.id}
              authors={element.authors}
              title={element.title}
              at={element.at}
              date={element.date}
              url={element.url}
            />
          ))}
        </div>
      ))}
    </div>
  </section>);
});

export default Publications;

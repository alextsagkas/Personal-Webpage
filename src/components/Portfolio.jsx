import { forwardRef } from "react";

import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

const Portfolio = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="mx-auto w-fit px-2">
      <Title>Portfolio</Title>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="lg:grid-col-3 grid grid-cols-1 gap-4 md:grid-cols-2">
          {portfolio.map((project) => (
            <PortfolioItem
              key={project.id}
              id={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Portfolio;

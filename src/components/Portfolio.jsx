import { forwardRef } from "react";

import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";
import Carousel, { CarouselItem } from "./Carousel";

const Portfolio = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="mx-auto w-screen max-w-5xl px-4 md:w-8/12">
      <Title>Portfolio</Title>
      <Carousel>
        {portfolio.map((project) => (
          <CarouselItem key={project.id}>
            <PortfolioItem
              key={project.id}
              id={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
});

export default Portfolio;

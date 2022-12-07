import { forwardRef } from "react";

import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";
import Carousel, { CarouselItem } from "./Carousel";

const Portfolio = forwardRef(({ homeScreenVisible }, ref) => {
  return (
    <section ref={ref}>
      <Title>Portfolio</Title>
      <Carousel homeScreenVisible={homeScreenVisible}>
        {portfolio.map((project) => (
          <CarouselItem key={project.id}>
            <PortfolioItem
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

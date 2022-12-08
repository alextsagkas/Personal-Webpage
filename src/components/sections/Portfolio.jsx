import { forwardRef } from "react";

import portfolio from "../../data/portfolio";
import PortfolioItem from "../helpers/PortfolioItem";
import Title from "../utility/Title";
import Carousel, { CarouselItem } from "../utility/Carousel";

const Portfolio = forwardRef(({ homeScreenVisible, scrollY }, ref) => {
  return (
    <section ref={ref}>
      <Title>Portfolio</Title>
      <Carousel homeScreenVisible={homeScreenVisible} scrollY={scrollY}>
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

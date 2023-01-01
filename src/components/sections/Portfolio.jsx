import { forwardRef } from "react";

import portfolio from "../../data/portfolio";
import PortfolioItem from "../helpers/PortfolioItem";
import Title from "../utility/Title";
import CarouselPhone, { CarouselPhoneItem } from "../utility/CarouselPhone";

const portfolioCarousel = [
  {
    id: -1,
    title: portfolio[portfolio.length - 1].title,
    imgUrl: portfolio[portfolio.length - 1].imgUrl,
    stack: portfolio[portfolio.length - 1].stack,
    link: portfolio[portfolio.length - 1].link,
  },
  ...portfolio,
  {
    id: portfolio.length,
    title: portfolio[0].title,
    imgUrl: portfolio[0].imgUrl,
    stack: portfolio[0].stack,
    link: portfolio[0].link,
  },
];

const Portfolio = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <Title>Portfolio</Title>
      <CarouselPhone>
        {portfolioCarousel.map((project) => (
          <CarouselPhoneItem key={project.id}>
            <PortfolioItem
              id={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          </CarouselPhoneItem>
        ))}
      </CarouselPhone>
    </section>
  );
});

export default Portfolio;

import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <section className="flex flex-col items-center justify-center md:flex-row">
      <div className="lg:grid-col-3 grid grid-cols-1 gap-4 md:grid-cols-2">
        {portfolio.map((project) => (
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

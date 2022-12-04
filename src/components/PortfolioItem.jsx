function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="overflow-hidden rounded-md border-2 border-stone-900 dark:border-white"
    >
      <img
        src={imgUrl}
        alt="portfolio-img"
        className="m:h-48 h-36 w-full cursor-pointer object-cover "
      />
      <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold dark:text-white md:mb-3 md:text-xl">
          {title}
        </h3>
        <p className="felx-wrap flex flex-row items-center justify-start gap-2 text-xs dark:text-white md:text-sm">
          {stack.map((item) => (
            <span className="inline-block rounded-md border-2 border-stone-900 px-2 py-1 font-semibold dark:border-white">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;

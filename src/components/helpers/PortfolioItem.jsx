function PortfolioItem({ id, title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-72 overflow-hidden rounded-md border-2 border-bgDark-900 dark:border-white"
    >
      <img
        src={imgUrl}
        alt="portfolio-img"
        className="h-40 w-full cursor-pointer object-cover"
      />
      <div className="w-full p-4">
        <h3 className="mb-2 text-base font-semibold dark:text-white md:mb-3">
          {title}
        </h3>
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs dark:text-white">
          {stack.map((item) => (
            <span
              key={id + item}
              className="inline-block rounded-md border-2 border-bgDark-900 px-2 py-1 font-semibold dark:border-white"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;

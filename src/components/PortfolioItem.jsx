function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <section className="border-2 border-stone-900 rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt="portfolio-img"
        className="w-full h-36 m:h-48 object-cover cursor-pointer "
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p
          className="flex felx-wrap gap-2 flex-row items-center justify-start 
                    text-xs md:text-sm"
        >
          {stack.map((item) => (
            <span
              className="inline-block px-2 py-1 font-semibold border-2 
              border-stone-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export default PortfolioItem;

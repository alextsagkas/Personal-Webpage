function TimeLineItem({ year, title, duration, details }) {
  return (
    <ol className="relative flex flex-col border-l border-bgDark-200 dark:border-bgDark-700 md:flex-row">
      <li className="mb-10 ml-4">
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-bgDark-200 dark:border-bgDark-900 dark:bg-bgDark-700" />
        <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
          <span className="inline-block rounded-md bg-bgDark-900 px-2 py-1 font-semibold text-white dark:bg-white dark:text-bgDark-900">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-bgDark-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-bgDark-400 dark:text-bgDark-500">
            {duration}
          </div>
          <p className="my-2 text-base font-normal text-bgDark-500 dark:text-bgDark-400">
            {details}
          </p>
        </p>
      </li>
    </ol>
  );
}

export default TimeLineItem;

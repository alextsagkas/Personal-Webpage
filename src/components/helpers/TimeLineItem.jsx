function TimeLineItem({ year, title, duration, details }) {
  return (
    <ol className="relative ml-2 flex flex-col border-l-[1.7px] border-bgDark-300 dark:border-bgDark-700 md:flex-row">
      <li className="mb-8 ml-4">
        <div className="absolute -left-[8.7px] mt-1.5 h-4 w-4 rounded-full border-[3.5px] border-bgLight-50 bg-bgDark-300 dark:border-bgDark-900 dark:bg-bgDark-700" />
        <div className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
          <span className="inline-block rounded-md bg-bgDark-900 px-2 py-1 font-semibold text-white dark:bg-white dark:text-bgDark-900">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-bgDark-900 dark:text-white">
            {title}
          </h3>
          {duration == "" ? null : (
            <div className="my-1 text-sm font-medium leading-none text-bgDark-400 dark:text-bgDark-500">
              {duration}
            </div>
          )}
          <p className="my-2 w-full text-base font-normal text-bgDark-500 dark:text-bgDark-400">
            {details}
          </p>
        </div>
      </li>
    </ol>
  );
}

export default TimeLineItem;

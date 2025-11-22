function GenericItem({year, title, subtitle, details, DetailsRenderer}) {
  return (
    <ol className="relative ml-2 flex flex-col border-l-[1.7px] border-bgDark-300 dark:border-bgDark-700 md:flex-row">
      <li className="mb-8 ml-4">
        <div
          className="absolute -left-[8.7px] mt-1.5 h-4 w-4 rounded-full border-[3.5px] border-bgLight-50 bg-bgDark-300 dark:border-bgDark-900 dark:bg-bgDark-700"/>
        <div className="flex flex-row flex-wrap items-center justify-start gap-y-4">
          <div
            className="grid gap-y-3">
            <div
              className="flex flex-row gap-x-3">
              <span
                className="basis-10 text-xs flex items-center py-1 px-2 justify-center text-center text-middle rounded-md bg-bgDark-900 font-semibold text-white dark:bg-white dark:text-bgDark-900">
                {year}
              </span>
              <h3 className="self-center text-lg font-semibold text-bgDark-900 dark:text-white">
                {title}
              </h3>
            </div>
            <h4
              className="text-base italic text-bgDark-800 dark:text-bgDark-50">
              {subtitle}
            </h4>
          </div>
          <div
            className="md:pr-20 text-base text-bgDark-700 dark:text-bgDark-300">
            {DetailsRenderer && <DetailsRenderer details={details}/>}
          </div>
        </div>
      </li>
    </ol>);
}

export default GenericItem;

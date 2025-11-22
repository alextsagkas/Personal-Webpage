function PublicationItem({index, authors, title, at, date, url}) {
  return (
    <div
      className="pb-1.5 flex flex-row gap-2 text-base">
      <div
        className="flex-10">
        [{index}]
      </div>
      <div
        className="">
        {authors}. {
          url === "" ?
            <>“{title}.” </> :
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hover:text-violet-600 md:hover:dark:text-orange-300 max-md:text-violet-600 max-md:dark:text-orange-300"
            >
              “{title}.”
            </a>
        } {at}. {date}.
      </div>
    </div>
  );
}

export default PublicationItem;

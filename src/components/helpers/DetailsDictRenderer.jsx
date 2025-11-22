function DetailsDictRenderer({details}) {
  return (
    <div className="flex flex-col gap-y-0.5 md:pr-20 text-sm">
      {details.map(item => (
        <div key={item.key} className="flex flex-row gap-x-4 py-0.5">
          <div className="w-12 font-medium">
            <p>{item.name}</p>
          </div>
          <div className="flex-1">
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailsDictRenderer;

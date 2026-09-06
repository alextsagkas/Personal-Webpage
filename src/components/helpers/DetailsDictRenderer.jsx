function DetailsDictRenderer({details}) {
  return (
    <div className="flex flex-col gap-y-0.5 ">
      {details.map(item => (
        <div key={item.key} className="flex flex-row gap-x-6 py-0.5">
          <div className="w-14 font-medium">
            <p>{item.name}</p>
          </div>
          <div className="flex-1">
            {[].concat(item.value).map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailsDictRenderer;

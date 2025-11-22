function DetailsListRenderer({details}) {
  return (
    <ul className="list-disc">
      {details.map((item) => (
        <li
          key={item.key}
          className="mb-0.5 ml-4">
          {item.value}
        </li>
      ))}
    </ul>
  );
}

export default DetailsListRenderer;

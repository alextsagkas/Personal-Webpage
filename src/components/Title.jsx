function Title({ children, id }) {
  return (
    <h1
      id={id & id}
      className="mb-5 text-3xl font-bold text-bgDark-900 dark:text-white"
    >
      {children}
    </h1>
  );
}

export default Title;

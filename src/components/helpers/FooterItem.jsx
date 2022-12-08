function FooterItem({ children, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-lg bg-bgDark-400 p-2 font-semibold text-white duration-300 ease-in-out hover:scale-105"
    >
      {children}
    </a>
  );
}

export default FooterItem;

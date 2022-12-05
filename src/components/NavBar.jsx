import ThemeButton from "./ThemeButton";

function NavBar({ theme, themeSwitcherHandler, refs }) {
  const { introductionRef, portfolioRef, timeLineRef, contactRef } = refs;

  return (
    <nav className="fixed top-0 z-10 h-14 w-full border-b-[0.6px] border-bgDark-400 bg-bgLight-50 pl-2 text-sm text-bgDark-900 opacity-90 dark:bg-bgDark-900 dark:text-white">
      <ul className="flex h-full list-none flex-row items-center gap-4">
        <li
          onClick={() => {
            introductionRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Portfolio
        </li>
        <li
          onClick={() => {
            timeLineRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Timeline
        </li>
        <li
          onClick={() => {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </li>
        <li className="w-full"></li>
        <ThemeButton
          theme={theme}
          themeSwitcherHandler={themeSwitcherHandler}
        />
      </ul>
    </nav>
  );
}

export default NavBar;

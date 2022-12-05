import ThemeButton from "./ThemeButton";

function NavBar({ theme, themeSwitcherHandler, refs }) {
  const { introductionRef, portfolioRef, timeLineRef, contactRef } = refs;
  const navItems = ["Home", "Portfolio", "Timeline", "Contact"];

  return (
    <nav className="fixed top-0 z-10 h-11 w-full border-b-[0.6px] border-bgDark-400 bg-bgLight-50 pl-2 text-sm font-medium text-bgDark-900 opacity-90 dark:bg-bgDark-900 dark:text-white">
      <ul className="flex h-full list-none flex-row items-center gap-4">
        <button
          onClick={() => {
            introductionRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Portfolio
        </button>
        <button
          onClick={() => {
            timeLineRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Timeline
        </button>
        <button
          onClick={() => {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </button>
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

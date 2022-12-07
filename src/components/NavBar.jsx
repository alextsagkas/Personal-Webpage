import ThemeButton from "./ThemeButton";

function NavBar({ theme, themeSwitcherHandler, removePageHandler, refs }) {
  const { portfolioRef, timeLineRef, contactRef } = refs;

  // TODO: fix it for min-width

  return (
    <nav className="fixed top-0 z-10 h-14 w-full border-b-[0.6px] border-bgDark-400 bg-bgLight-50 pl-3 text-sm text-bgDark-900 opacity-90 dark:bg-bgDark-900 dark:text-white smallPhone:text-base">
      <ul className="flex h-full list-none flex-row items-center gap-4 smallPhone:gap-5">
        <button
          onClick={() => {
            removePageHandler(false);
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
        <li className="hidden w-full navbar:inline-block"></li>
        <ThemeButton
          theme={theme}
          themeSwitcherHandler={themeSwitcherHandler}
        />
      </ul>
    </nav>
  );
}

export default NavBar;

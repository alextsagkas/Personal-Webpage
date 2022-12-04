import ThemeButton from "./ThemeButton";

function NavBar({ theme, themeSwitcherHandler }) {
  return (
    <nav className="fixed top-0 z-10 h-14 w-full border-b-[0.6px] border-bgDark-400 bg-bgLight-50 pl-2 text-sm text-bgDark-900 opacity-90 dark:bg-bgDark-900 dark:text-white">
      <ul className="flex h-full list-none flex-row items-center gap-4">
        <li>Home</li>
        <li>Projects</li>
        <li>Timeline</li>
        <li>Contact</li>
        <li className="w-full"></li>
        <li>
          <ThemeButton
            theme={theme}
            themeSwitcherHandler={themeSwitcherHandler}
          />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

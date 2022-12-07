import { Sun, Moon } from "./icons/Icons";

function ThemeButton({ themeSwitcherHandler, theme }) {
  return (
    <button
      type="button"
      onClick={themeSwitcherHandler}
      className="rounded-md bg-violet-300 p-[4px] text-lg dark:bg-orange-300"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}

export default ThemeButton;

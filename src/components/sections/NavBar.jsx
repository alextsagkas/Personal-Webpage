import NavBarItem from "../helpers/NavBarItem";
import ThemeButton from "../utility/ThemeButton";

function NavBar({ theme, themeSwitcherHandler, removePageHandler, refs }) {
  const { portfolioRef, timeLineRef, contactRef } = refs;

  return (
    <nav className="min-[380px]:text-base fixed top-0 z-10 h-14 w-full border-b-[0.6px] border-bgDark-400 bg-bgLight-50 py-3 text-sm text-bgDark-900 opacity-90 dark:bg-bgDark-900 dark:text-white">
      <ul className="min-[360px]:w-11/12 min-[380px]:gap-5 max-[320px]:justify-between mx-auto flex h-full w-full  max-w-5xl flex-row items-center justify-center gap-4 px-4 font-medium md:w-8/12">
        <button
          onClick={() => {
            removePageHandler(false);
          }}
        >
          Home
        </button>
        <NavBarItem ref={portfolioRef} text={"Projects"} />
        <NavBarItem ref={timeLineRef} text={"Timeline"} />
        <NavBarItem ref={contactRef} text={"Contact"} />
        <div className="min-[400px]:inline-block hidden w-full"></div>
        <ThemeButton
          theme={theme}
          themeSwitcherHandler={themeSwitcherHandler}
        />
      </ul>
    </nav>
  );
}

export default NavBar;

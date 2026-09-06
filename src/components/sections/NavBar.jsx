import NavBarItem from "../helpers/NavBarItem";
import ThemeButton from "../utility/ThemeButton";

function NavBar({ theme, themeSwitcherHandler, removePageHandler, refs }) {
  const { educationRef, employmentRef, publicationsRef, portfolioRef, contactRef } = refs;

  return (
    <nav className="fixed top-0 z-10 h-14 w-full border-b-[0.6px] border-bgDark-400 bg-bgLight-50 py-3 text-xs text-bgDark-900 opacity-90 dark:bg-bgDark-900 dark:text-white min-[380px]:text-sm">
      <ul className="mx-auto flex h-full w-11/12 max-w-5xl flex-row items-center justify-center gap-4 px-4 font-medium min-[380px]:gap-5 page:w-[max(66.666667%,39rem)]">
        <button
          onClick={() => {
            removePageHandler(false);
          }}
        >
          Home
        </button>
        <NavBarItem ref={educationRef} text={"Education"} />
        <NavBarItem ref={employmentRef} text={"Employment"} />
        <NavBarItem ref={publicationsRef} text={"Publications"} />
        <NavBarItem ref={portfolioRef} text={"Projects"} />
        <NavBarItem ref={contactRef} text={"Contact"} />
        <div className="inline-block w-full"></div>
        <ThemeButton
          theme={theme}
          themeSwitcherHandler={themeSwitcherHandler}
        />
      </ul>
    </nav>
  );
}

export default NavBar;

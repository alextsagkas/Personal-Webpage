import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Portfolio from "./components/Portfolio";
import TimeLine from "./components/TimeLine";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const themeSwitcherHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <NavBar theme={theme} themeSwitcherHandler={themeSwitcherHandler} />
      <div className="min-h-screen bg-bgLight-50 font-inter text-bgDark-900 dark:bg-bgDark-900 dark:text-bgDark-300">
        <div className="mx-auto w-11/12 min-w-fit max-w-5xl">
          <Introduction />
          <Portfolio />
          <TimeLine />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

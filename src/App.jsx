import { useEffect, useRef, useState } from "react";

import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Portfolio from "./components/Portfolio";
import TimeLine from "./components/TimeLine";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);

  const introductionRef = useRef(null);
  const portfolioRef = useRef(null);
  const timeLineRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    introductionRef,
    portfolioRef,
    timeLineRef,
    contactRef,
  };

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
    <div className="mx-auto min-h-screen w-11/12 min-w-fit max-w-5xl bg-bgLight-50 font-inter text-bgDark-900 dark:bg-bgDark-900 dark:text-bgDark-300">
      <NavBar
        theme={theme}
        themeSwitcherHandler={themeSwitcherHandler}
        refs={refs}
      />
      <Introduction ref={introductionRef} />
      <Portfolio ref={portfolioRef} />
      <TimeLine ref={timeLineRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;

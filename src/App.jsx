import { useEffect, useRef, useState } from "react";

import NavBar from "./components/NavBar";
import IntroAnimate from "./components/IntroAnimate";
import Portfolio from "./components/Portfolio";
import TimeLine from "./components/TimeLine";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);
  const [removePage, removePageHandler] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [toolBarHidden, setToolBarHidden] = useState(false);

  const introductionRef = useRef(null);
  const portfolioRef = useRef(null);
  const timeLineRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (scrollY < window.scrollY) {
        setToolBarHidden(true);
      } else {
        setToolBarHidden(false);
      }
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

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

  useEffect(() => {
    if (!removePage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [removePage]);

  return (
    <div className="mx-auto min-h-screen bg-bgLight-50 font-inter text-bgDark-900 dark:bg-bgDark-900 dark:text-bgDark-300">
      <NavBar
        theme={theme}
        themeSwitcherHandler={themeSwitcherHandler}
        removePageHandler={removePageHandler}
        refs={refs}
      />
      {!removePage ? (
        <IntroAnimate
          toolBarHidden={toolBarHidden}
          removePageHandler={removePageHandler}
          ref={introductionRef}
        />
      ) : null}
      <Portfolio ref={portfolioRef} />
      <TimeLine ref={timeLineRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;

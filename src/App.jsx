import { useEffect, useRef, useState } from "react";

import NavBar from "./components/sections/NavBar";
import IntroSlider from "./components/sections/IntroSlider";
import Education from "./components/sections/Education";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  const [theme, setTheme] = useState(null);
  const [removePage, removePageHandler] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [toolBarHidden, setToolBarHidden] = useState(false);

  const introductionRef = useRef(null);
  const educationRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Toolbar Logic
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

  // Color Theme
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Change Theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Div Behind Introduction
  useEffect(() => {
    if (!removePage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [removePage]);

  const themeSwitcherHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const refs = {
    introductionRef,
    educationRef,
    portfolioRef,
    contactRef,
  };

  return (
    <div className="min-h-screen min-w-[320px] bg-bgLight-50 font-inter text-bgDark-900 dark:bg-bgDark-900 dark:text-bgDark-300">
      <NavBar
        theme={theme}
        themeSwitcherHandler={themeSwitcherHandler}
        removePageHandler={removePageHandler}
        refs={refs}
      />
      <div className="mx-auto w-11/12 max-w-5xl px-4 md:w-8/12">
        {!removePage ? (
          <IntroSlider
            toolBarHidden={toolBarHidden}
            removePageHandler={removePageHandler}
            ref={introductionRef}
          />
        ) : null}
        <Education ref={educationRef} />
        <Portfolio ref={portfolioRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        smallPhone: "380px",
        smallest: "320px",
        navbar: "400px",
        navbarPadding: "360px",
      },
      fontFamily: {
        inter: ["inter", "serif"],
      },
      colors: {
        bgDark: colors.neutral,
        bgLight: colors.orange,
      },
    },
  },
  plugins: [],
};

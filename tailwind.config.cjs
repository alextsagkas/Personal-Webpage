const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', "inter", "serif"],
      },
      colors: {
        bgDark: colors.neutral,
        bgLight: colors.orange,
        failure: colors.red,
        success: colors.green,
      },
    },
  },
  plugins: [],
};

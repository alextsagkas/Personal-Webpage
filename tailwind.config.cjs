const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        // The NavBar's collapse point, and the only breakpoint the page layout
        // needs. Below it the NavBar is just "Home" and the page spans w-11/12;
        // at or above it the full nav row appears and the page switches to
        // max(8/12, 39rem). The 39rem floor is the nav row's own intrinsic
        // width -- 50 characters of text-sm JetBrains Mono (26.25rem) + the
        // theme button (2rem) + seven gap-5 gaps (8.75rem) + the ul's px-4
        // (2rem) -- so the page can never be narrower than the nav that sits on
        // it. It is expressed in rem so it tracks the root font size the same
        // way the nav's own text and gaps do.
        page: "650px",
      },
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

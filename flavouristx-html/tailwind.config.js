/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      'Outfit': ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#F47500",
        secondary1: "#FFA13F",
        tcolor: "#4D4737",

        nw10: "#FFFAD6",
        nw20: "#F7F6F3",
        nw30: "#F7F2E2",
        nw40: "#FFFFFF",

        nb10: "#1A1D16",
        nb20: "#25292C",
        nb30: "#1F2326",
        nb40: "#14181B",

      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1296px",
        // "3xl": "1600px",
        // "4xl": "1700px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  // plugins: plugins,
};

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
        primary: "#FF8000",
        secondary1: "#C0FF5B",

        nw10: "#FFFFFF",
        nw20: "#F7F7FD",
        nw30: "#F1F1F1",
        nw40: "#F6F9FF",

        nb10: "#151517",
        nb20: "#2D2F33",
        nb30: "#57595D",
        nb40: "#2C2C2F",

      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1296px",
        "3xl": "1600px",
        "4xl": "1700px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  // plugins: plugins,
};

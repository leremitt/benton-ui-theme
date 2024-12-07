/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      'manrope': ["Manrope", "sans-serif"],
      'montserrat': ["Montserrat", "sans-serif"],
      'display': ["Montserrat", "sans-serif"],
      'body': ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#8CE91C",
        secondary1: "#F95D00",
        // secondary2: "#FF6161",
        // secondary3: "#BD7B00",
        // at10: "#1E2132",
        // at20: "#23283C",

        nw10: "#BDBDBD",
        nw20: "#F2F6F6",
        nw30: "#7A7C7E",
        nw40: "#F8F8F8",

        nb10: "#161616",
        nb20: "#1C1C1C",
        nb30: "#282828",
        nb40: "#191919",

        extra10: "#B3B6B94D",
        extra20: "#B3B6B9",
        'active-text': '#007bff',
        'active-bg': '#e3f2fd',
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        xxxl: "1600px",
        "4xl": "1800px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  // plugins: plugins,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    // fontFamily: {
    //   'montserrat': ["Montserrat", "sans-serif"],
    // },
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#96F048",
        secondary1: "#9D65FB",
        secondary2: "#FF6161",
        secondary3: "#BD7B00",
        at10: "#1E2132",
        at20: "#23283C",

        nw10: "#FFFFFF",
        nw20: "#EBECF0",
        nw30: "#B3B6B9",
        nw40: "#F6F9FF",

        nb10: "#191919",
        nb20: "#2C2C2C",
        nb30: "#1F1F1F",
        nb40: "#292D36",

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

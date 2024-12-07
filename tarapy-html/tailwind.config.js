/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      'montserrat': ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#005F59",
        secondary1: "#FF9245",

        nw10: "#FFFFFF",
        nw20: "#F9F8F9",
        nw30: "#F1F1F0",
        nw40: "#F1F1F1",

        nb10: "#010001",
        nb20: "#26292F",
        nb30: "#1F1F1F",
        nb40: "#1C1C1C",

        at10: "#D7FFE9",
        at20: "#FFD7F2",
        at30: "#03323A",
        at40: "#F7EA86",
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

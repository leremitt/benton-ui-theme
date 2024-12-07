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
        primary: "#FDD69B",
        secondary1: "#9747FF",
        secondary2: "#FFEFD7",
        secondary3: "#BD7B00",
        a10: "1D1D1D",
        a20: "323232",
        a30: "FFCE32",
        a40: "FFEFD7",
        a50: "CDFF00",

        nw10: "#FFFFFF",
        nw20: "#F2F6F6",
        nw30: "#B3B6B9",
        nw40: "#F8F8F8",

        nb10: "#000000",
        nb20: "#25252D",
        nb30: "#25252D",
        nb40: "#292D36",
        extra10: "#FFEFD74D",
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

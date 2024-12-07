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
        primary: "#FEC92F",
        secondary1: "#FAFAFA",

        nc10: "#FFFFFF",
        nc20: "#ECECEC",
        nc30: "#050505",
        nc40: "#222222",
        nc50: "#222222",

      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1296px",
        "3xl": "1600px",
        "4xl": "1800px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  // plugins: plugins,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      'Rubik': ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#E3327E",
        secondary1: "#20242C",

        nc10: "#FFFFFF",
        nc20: "#121212",
        nc30: "#000000",
        nc40: "#838383",
        nc50: "#FFD200",

      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1296px",
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

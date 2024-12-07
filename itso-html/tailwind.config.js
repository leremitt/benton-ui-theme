/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      'Kanit': ["Kanit", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#3C55F9",
        secondary1: "#99C306",

        nc10: "#F5F5DC",
        nc20: "#111111",
        nc30: "#292824",
        nc40: "#1C1C1C",
        nc50: "#FFD200",

        // nb10: "#161616",
        // nb20: "#1C1C1C",
        // nb30: "#282828",
        // nb40: "#191919",

        // extra10: "#B3B6B94D",
        // extra20: "#B3B6B9",
        // 'active-text': '#007bff',
        // 'active-bg': '#e3f2fd',
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

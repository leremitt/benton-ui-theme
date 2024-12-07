/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#3772FF",
        secondary: "#40F39A",
        accent: {
          1: "#FFFFFF",
          2: "#D3E0FF",
          3: "#F8FFFC",
          4: "#FFEFD7",
          5: "#CDFF00",
        },
        white: {
          1: "#FFFFFF",
          2: "#F2F6F6",
          3: "#B3B6B9",
          4: "#F6F9FF",
          5: "#F8F8F8",
        },
        black: {
          1: "#000000",
          2: "#25252D",
          3: "#25252D",
          4: "#292D36",
          5: "#0E0D39",
        },
      },
      screens: {
        xs: "450px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        "3xl": "1600px",
        "4xl": "1800px",
      },

      fontFamily: {
        kanit: ["var(--body-font)"],
      },
      boxShadow: {
        custom1: "0px 6px 30px 0px rgba(0, 0, 0, 0.04)",
        custom2: "0px 6px 30px 0px rgba(0, 0, 0, 0.06)",
        custom3: "0px 6px 30px 0px rgba(0, 0, 0, 0.08)",
      },

      spacing: {
        15: "60px",
        18: "72px",
        25: "100px",
        30: "120px",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "custom-pulse":
          "custom-pulse 6s ease-in-out infinite alternate-reverse;",
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".theme-transition-3": {
          transition: "all 0.3s ease-in-out",
        },
        ".theme-transition-10": {
          transition: "all 1s ease-in-out",
        },
        ".theme-transition-4": {
          transition: "all 0.4s ease-in-out",
        },
        ".theme-transition-6": {
          transition: "all 0.6s ease-in-out",
        },
        ".theme-transition-8": {
          transition: "all 0.8s ease-in-out",
        },
      });
    }),
  ],
};

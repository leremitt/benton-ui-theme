/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#D39B59",
      secondary: "#FFA085",
      neutral: {
        1: "#FFFFFF",
        2: "#000000",
        3: "#B5B5A4",
        4: "#7F5D35",
        5: "#22190E",
        6: "#817D5C",
        7: "#141414",
        8: "#292929",
      },
    },
    extend: {
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
        "body-font": ["var(--body-font)"],
        "secondary-font": ["var(--secondary-font)"],
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
        "custom-pulse": "custom-pulse 6s ease-in-out infinite alternate-reverse;",
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

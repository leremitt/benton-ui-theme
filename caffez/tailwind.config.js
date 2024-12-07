/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#E5DBC9",
      secondary: "#B5EAEE",
      white: {
        1: "#172526",
        2: "#4F7C80",
        3: "#2F4A4C",
        4: "#1F3133",
      },
      black: {
        1: "#E5DBC9",
        2: "#BCD4D5",
        3: "#3C5E62",
        4: "#294043",
      },
      accent: {
        1: "#FFFFFF",
        2: "#D3E0FF",
        3: "#F8FFFC",
        4: "#FFEFD7",
        5: "#CDFF00",
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
      borderRadius: {
        "20px": "20px",
        "32px": "32px",
      },
      fontFamily: {
        "body-font": ["var(--body-font)"],
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

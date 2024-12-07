/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss';
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          xxl: "1400px",
          xxxl: "1600px",
          '4xl':"1800px"
        },
        colors: {
          "n2":"#E5DBC9",
          "n3":"#B6B6BA",
          "n4":"#FFEA80",
          "n5":"#1E1E1E",
          "secondaryBg":"rgba(30, 30, 30, 0.50)",
          "borderColor":"rgba(178, 178, 178, 0.10)"
        },
        padding: {
          "30": "120px",
          "15": "60px",
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
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#1A2A4D",
        secondary: "#2C5DA9",
        ctaHover: "#990302",
      },
      screens: {
        mobile: { min: "280px", max: "639px" },
        tablet: { min: "640px", max: "1023px" },
        medium: { min: "1024px", max: "1279px" },
        large: { min: "1280px", max: "1500px" },
        SpecificLarge: { min: "1280px" },
        SpecificLargeMM: { min: "1280px", max: "1640px" },
        SpecificTablet: { min: "445px", max: "633px" },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        nunito: ['"Nunito Sans"', "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Satoshi: ["Satoshi", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

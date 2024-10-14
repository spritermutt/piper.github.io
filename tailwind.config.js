const { addIconSelectors } = require("@iconify/tailwind");
const { addDynamicIconSelectors } = require("@iconify/tailwind");

module.exports = {
  content: ["./*.{html,js}"], // Simplified path
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: " #2AD38C",
        "spring-green": {
          50: "#F5FFFB",
          100: "#C2FFE5",
          200: "#8EFED0",
          300: "#5BFEBA",
          400: "#30F1A1",
          500: "#2AD38C",
          600: "#24B478",
          700: "#1E9664",
          800: "#18774F",
          900: "#12593B",
          950: "#0C3A27",
        },
      },
      fontFamily: {
        noto: ["Noto Sans Thai", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("postcss"),
    require("daisyui"),
    require("@designbycode/tailwindcss-text-stroke"),
    require("@iconify/tailwind"),
    addIconSelectors(["mdi", "mdi-light"]),
    addDynamicIconSelectors(),
  ],
};

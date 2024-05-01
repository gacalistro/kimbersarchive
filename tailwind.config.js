/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["index.html", "src/*/**"],
  theme: {
    extend: {
      colors: {
        dark: colors.zinc,
        light: colors.gray,
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

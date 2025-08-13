/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust to match your project
  ],
  theme: {
    extend: {}, // add custom colors, fonts, etc here
  },
  plugins: [],
};

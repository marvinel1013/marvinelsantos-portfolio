/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signatureFont: "Great Vibes, cursive",
      },
      colors: {
        primary: "#45a0f5",
        secondary: "#26e3c2",
        light: "#e1e5f2",
        dark: "#0f0f0f",
      },
    },
  },
  plugins: [],
};

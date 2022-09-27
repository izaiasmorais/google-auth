/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "nlw-gradient":
          "linear-gradient(240deg, #0BB5FF 50%, #43E7AD)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "signin-gradient": "linear-gradient(240deg, #0BB5FF 50%, #43E7AD)",
        "signout-gradient": "linear-gradient(240deg, #FFAA0B 50%, #FF0B64)",
      },
    },
  },
  plugins: [],
};

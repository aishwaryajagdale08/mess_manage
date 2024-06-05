/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#E83667",
        primaryDark:"#BB2c51",
        secondary:"#21D4B9",
        dark:"#303030",
      },
      fontFamily:{
        inter:["inter","sans-serif"],
        cursive:["Ephesis","cursive"],
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem",
          ls:"3rem",
          xl:"4rem",
        }
      }
    },
  },
  plugins: [],
}


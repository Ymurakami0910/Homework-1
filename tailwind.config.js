/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'], 
      },
      colors: {
        pastelOrange: {
          100: '#FDBBAA', 
          200: ' #F0E2E2', 
        },
        oil:{
          100:"#4A4A4A",
          200:"#003366 "

        }

      }, 
    },
  },
  plugins: [],
}

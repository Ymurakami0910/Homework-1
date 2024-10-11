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
        }
      }, 
    },
  },
  plugins: [],
}

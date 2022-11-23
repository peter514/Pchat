/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         'primary':'#00df98',
         'secondary':'#e2e8f0'

      },
    },
  },
  plugins: [],
}
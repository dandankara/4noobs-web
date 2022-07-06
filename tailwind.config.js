/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'header': 'Staatliches, cursive'
      },
      colors: {
        'white-f5': '#F5F5F5',
        'white-f3': '#F3F3F3',
        'purple-4noobs': '#6814CA',
        'purple-button': '#782BF1',
        'dark-purple': '#1E0B35',
        'dark-0d': '#0D0D0D',
        'dark-cards': '#191919',
      }
    },
  },
  plugins: [],
}

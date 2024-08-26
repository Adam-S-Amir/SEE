/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        Folly: '#FF3562',
        Turquoise: '#188C7C',
        SlateGrey: '#828F9B',
        Cream: '#DBDACE'
      },
      fontFamily: {
        Lexend: ['Lexend', 'sans-serif'],
        Dangrek: ['Dangrek', 'sans-serif'],
        Bungee: ['Bungee', 'sans-serif']
      }
    },
  },
  plugins: [],
}


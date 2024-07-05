/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        euclid: ['Euclid Circular B', 'sans-serif'],
      },
      colors: {
        lightGrey: '#F0F1F6',
        grey: '#CDCFD4',
        mdGrey: '#9AA0A8',
        darkGrey: '#4F5867',
        dark: '#191635',
        lightBlue: '#F0F4FE',
        Grey: '#595959',
        brown: '#262626',
        light: '#F0F0F0',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      DarkBrown: '#574f49',
      SuperBrown: '#372a22',
      AngelBlue: '#437eab',
      Beige: '#dfd7cb',
      WhiteBG: '#ffffff',
    },
    fontFamily: {
      Montserrat: ['var(--font-montserrat)'],
      Tangerine: ['var(--font-tangerine)'],
    },
    extend: {},
  },
  plugins: [],
};

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
    extend: {
      animation: {
        'carousel-slide-current':
          '0.5s linear 4.5s 1 normal forwards carousel-slide-current',
        'carousel-slide-next':
          '0.5s linear 4.5s 1 normal forwards carousel-slide-next',
      },
      keyframes: {
        'carousel-slide-current': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'carousel-slide-next': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

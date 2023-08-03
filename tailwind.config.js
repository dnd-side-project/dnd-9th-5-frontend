const { colors, pxToRemTailwind, animations } = require('./styles/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...pxToRemTailwind,
      colors,
      keyframes: animations,
      animation: {
        slideUp: 'slideUp 0.5s ease-in-out',
      },
    },
    fontWeight: {
      100: '100',
      300: '300',
      350: '350',
      400: '400',
      700: '700',
      900: '900',
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};

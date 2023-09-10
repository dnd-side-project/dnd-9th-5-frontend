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
        sizeUpAndDown1: 'sizeUpAndDown 2s ease infinite ',
        sizeUpAndDown2: 'sizeUpAndDown 2s 0.25s ease infinite ',
        sizeUpAndDown3: 'sizeUpAndDown 2s 0.5s ease infinite ',
        sizeUpAndDown4: 'sizeUpAndDown 2s 0.75s ease infinite ',
      },
      zIndex: {
        modal: 1000,
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

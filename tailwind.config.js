const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  theme: {
    colors: {
      black: '#333',
      tangerine: {
        100: '#ffe5c5',
        200: '#ffd9ab',
        300: '#ffce92',
        400: '#ffc278',
        500: '#ffb75f',
        600: '#ffac45',
        600: '#ff9512',
        700: '#f88800',
        800: '#de7a00',
        900: '#c56c00',
      },
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      titillium: ['Titillium Web', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      ring: ['hover', 'active', 'focus'],
      ringColor: ['hover', 'active', 'focus'],
      ringOpacity: ['hover', 'active', 'focus'],
      outline: ['hover', 'active', 'focus'],
      border: ['hover', 'active', 'focus'],
      borderColor: ['hover', 'active', 'focus'],
      backgroundColor: ['hover', 'active', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

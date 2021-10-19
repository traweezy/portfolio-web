const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      height: theme => ({
        'screen-3/4': '75vh',
        'screen-1/2': '50vh',
      }),
      minHeight: theme => ({
        700: '700px',
      }),
      transitionProperty: {
        height: 'height',
      },
      boxShadow: {
        hero: '12px 0 #ffb75f, 24px 0 #ffc57f, 36px 0 #ffd49f',
      },
    },
    colors: {
      black: '#333',
      tangerine: {
        100: '#ffd49f',
        200: '#ffcd8f',
        300: '#ffc57f',
        400: '#ffbe6f',
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
      blue: {
        100: '#73838c',
        200: '#5c6e79',
        300: '#455966',
        400: '#2d4553',
        500: '#163040',
        600: '#142B3A',
        600: '#122633',
        700: '#0F222D',
        800: '#0d1d26',
        900: '#0b1820',
      },
      'light-gray': {
        500: '#f7f7f7',
      },
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
      display: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

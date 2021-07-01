module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  theme: {
    colors: {
      black: '#333',
      tangerine: '#ffb75f',
    },
    fontFamily: {
      titillium: ['Titillium Web', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      ringOpacity: ['hover', 'active'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

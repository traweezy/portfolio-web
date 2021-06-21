module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  theme: {
    colors: {
      black: '#333',
      tangerine: '#FF9B21',
    },
    fontFamily: {
      titillium: ['Titillium Web', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

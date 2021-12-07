module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        primary: '#3AC1C8',
      },
      backgroundColor: {
        primary: '#3AC1C8',
        secondary: '#323232',
      },
      textColor: {
        primary: '#3AC1C8',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

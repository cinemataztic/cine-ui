module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    placeholderColor: {
      primary: '#707070',
    },
    extend: {
      borderColor: {
        primary: '#3AC1C8',
        secondary: '#323232',
      },
      backgroundColor: {
        primary: '#1E1E1E',
        secondary: '#272727',
        tertiary: '#323232',
        hover: '#3c3c3c',
        buttonPrimary: '#3AC1C8',
        buttonSecondary: '#C9C9C9',
      },
      textColor: {
        primary: '#3AC1C8',
        secondary: '#272727',
      },
      borderWidth: {
        3: '3px',
      },
      gradientColorStops: {
        primary: '#00000020',
        secondary: '#ffffff20',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
      gradientColorStops: [
        'responsive',
        'hover',
        'focus',
        'active',
        'group-hover',
      ],
    },
  },
};

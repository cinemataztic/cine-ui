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
        buttonPrimaryHover: '#61CDD3',
        buttonPrimaryActive: '#237478',
        buttonSecondary: '#C9C9C9',
        buttonSecondaryActive: '#5D5D5D',
        buttonDanger: '#FF657A',
      },
      backgroundColor: {
        primary: '#1E1E1E',
        secondary: '#272727',
        tertiary: '#323232',
        hover: '#3c3c3c',
        buttonPrimary: '#3AC1C8',
        buttonPrimaryHover: '#61CDD3',
        buttonPrimaryActive: '#237478',
        buttonSecondary: '#C9C9C9',
        buttonSecondaryActive: '#5D5D5D',
        buttonDanger: '#FF657A',
      },
      textColor: {
        primary: '#3AC1C8',
        secondary: '#272727',
        tertiary: '#3C3C3C',
        buttonPrimary: '#234c56',
        buttonDefaultSecondary: '#5D5D5D',
        buttonOutlineSecondary: '#C9C9C9',
        buttonTertiaryHover: '#61CDD3',
        buttonTertiaryActive: '#237478',
        buttonDanger: '#FF657A',
      },
      borderWidth: {
        3: '3px',
      },
      gradientColorStops: {
        primary: '#00000020',
        secondary: '#ffffff20',
        tertiary: '#ffffff75',
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

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
        buttonDangerHover: '#FF8495',
        buttonDangerActive: '#993D49',
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
        buttonDangerHover: '#FF8495',
        buttonDangerActive: '#993D49',
      },
      textColor: {
        //Update few text colors later based on the PR text-color-update
        primary: '#fff',
        secondary: '#272727',
        tertiary: '#3C3C3C',
        buttonPrimary: '#174D50',
        buttonDefaultSecondary: '#5D5D5D',
        buttonOutlineSecondary: '#C9C9C9',
        buttonTertiaryHover: '#61CDD3',
        buttonTertiaryActive: '#237478',
        buttonDanger: '#FF657A',
        buttonDangerHover: '#FF8495',
        buttonDangerActive: '#993D49',
        accent1: '#3AC1C8',
      },
      borderWidth: {
        3: '3px',
      },
      gradientColorStops: {
        primary: '#00000020',
        secondary: '#ffffff20',
        tertiary: '#ffffff75',
      },
      fontSize: {
        '4xl': [
          '2.25rem',
          {
            lineHeight: '2.625rem',
          },
        ],
        '3xl': [
          '2rem',
          {
            lineHeight: '2.375rem',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '1.75rem',
          },
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '1.5rem',
          },
        ],
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

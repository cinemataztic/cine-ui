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
        primaryHover: '#61CDD3',
        primaryActive: '#2E9AA0',
        buttonSecondary: '#C9C9C9',
        secondaryActive: '#5D5D5D',
        danger: '#FF657A',
        dangerHover: '#FF8495',
        dangerActive: '#993D49',
        default: '#FFF',
        defaultSubtle: '#707070',
      },
      backgroundColor: {
        primary: '#1E1E1E',
        secondary: '#272727',
        tertiary: '#323232',
        hover: '#3C3C3C',
        buttonPrimary: '#3AC1C8',
        primaryHover: '#61CDD3',
        primaryActive: '#2E9AA0',
        buttonSecondary: '#C9C9C9',
        secondaryActive: '#5D5D5D',
        danger: '#FF657A',
        dangerHover: '#FF8495',
        dangerActive: '#993D49',
        warning: '#FF8811',
        inverted: '#FFF',
      },
      textColor: {
        primary: '#3AC1C8',
        secondary: '#272727',
        tertiary: '#3C3C3C',
        buttonSecondary: '#C9C9C9',
        secondaryActive: '#5D5D5D',
        tertiaryHover: '#61CDD3',
        tertiaryActive: '#2E9AA0',
        danger: '#FF657A',
        dangerHover: '#FF8495',
        dangerActive: '#993D49',
        default: '#FFF',
        defaultSubtle: '#707070',
      },
      colors: {
        primary: '#FFCE00',
        secondary: '#524E3E',
        horizontalLine: '#151A20',
      },
      fill: {
        primary: '#3AC1C8',
      },
      borderWidth: {
        3: '3px',
      },
      fontSize: {
        xxs: [
          '0.5rem',
          {
            lineHeight: '0.75rem',
          },
        ],
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
        lg: ['1.125rem', { lineHeight: '1.5rem' }],
        md: ['1rem', { lineHeight: '1.25rem' }],
        sm: ['0.875rem', { lineHeight: '1rem' }],
      },
      animation: {
        dash: 'dash 3s ease-in-out forwards',
      },
      strokeWidth: {
        6: '6px',
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

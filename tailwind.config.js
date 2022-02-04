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
        hover: '#3C3C3C',
        buttonPrimary: '#3AC1C8',
        buttonSecondary: '#C9C9C9',
        danger: '#FF657A',
        warning: '#FF8811',
        inverted: '#FFF',
      },
      textColor: {
        primary: '#3AC1C8',
        default: '#FFF',
      },
      borderWidth: {
        3: '3px',
      },
      gradientColorStops: {
        primary: '#00000020',
        secondary: '#ffffff20',
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
        lg: ['1.125rem', { lineHeight: '1.5rem' }],
        md: ['1rem', { lineHeight: '1.25rem' }],
        sm: ['0.875rem', { lineHeight: '1rem' }],
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

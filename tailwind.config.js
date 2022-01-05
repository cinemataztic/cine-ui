module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        primary: '#3AC1C8',
      },
      backgroundColor: {
        primary: '#3AC1C8',
        secondary: '#323232',
        tertiary: '#1E1E1E',
        bggray: '#272727',
      },
      textColor: {
        primary: '#3AC1C8',
        textgray: '#272727',
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

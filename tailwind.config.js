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
        //border color for button when hovering
        tertiary: '#83D9DD',
        //border color for button when it is active
        quaternary: '#298691',
        //border color for secondary button when hovering
        quinary: '#A5A5A5',
        //border color for secondary button when it is active
        senary: '#434343',
      },
      backgroundColor: {
        primary: '#1E1E1E',
        secondary: '#272727',
        tertiary: '#323232',
        hover: '#3c3c3c',
        buttonPrimary: '#3AC1C8',
        //buttonSecondary: '#C9C9C9',
      },
      textColor: {
        primary: '#3AC1C8',
        secondary: '#272727',
        tertiary: '#3C3C3C',
        //text color for primary button when hovering
        quaternary: '#83D9DD',
        //text color for primary button when it is active
        quinary: '#298691',
        //text color for secondary outlined button
        senary: '#a5a5a5',
        //text color for secondary text button
        septenary: '#A5A5A5',
        //text color for secondary text button when active
        octonary: '#434343',
        //text color for secondary text button when hover
        nonary: '#d6d6d6',
      },
      borderWidth: {
        3: '3px',
      },
      gradientColorStops: {
        primary: '#00000020',
        secondary: '#ffffff20',
        tertiary: '#ffffff75',
        quaternary: '#ffffff50',
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

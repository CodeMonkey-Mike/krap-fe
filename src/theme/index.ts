const colors = {
  transparent: 'transparent',
  white: '#ffffff',
  primary: '#0077CC',
  primaryHover: '#0077DD',
  secondary: '#3300CC',
  secondaryHover: '#3300DD',
  borderColor: '#cdcdcd',
  text: '#000',
};
export const theme = {
  breakpoints: ['425px', '1100px', '1440px'],
  space: [0, 4, 8, 10, 15, 20, 25, 30, 40, 56],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontFamily: ["'Lato', sans-serif", "'Poppins', sans-serif"],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  colors,
  colorStyles: {
    default: {
      color: colors.white,
    },
    primary: {
      color: colors.primary,
    },
    secondary: {
      color: colors.secondary,
    },
  },
  buttonStyles: {
    default: {
      border: 0,
      backgroundColor: colors.transparent,
      textDecoration: 'none',
      height: 'auto',
      padding: 0,

      '&:hover': {
        backgroundColor: colors.transparent,
      },
    },
    primary: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.primary,
      borderRadius: '4px',
      backgroundColor: colors.primary,
      transition: 'all 0.35s ease',

      '&:hover': {
        backgroundColor: colors.primaryHover,
        borderColor: colors.primaryHover,
      },
    },
    secondary: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.secondary,
      borderRadius: '4px',
      backgroundColor: colors.secondary,
      transition: 'all 0.35s ease',

      '&:hover': {
        backgroundColor: colors.secondaryHover,
        borderColor: colors.secondaryHover,
      },
    },
    outlined: {
      borderRadius: '4px',
      backgroundColor: colors.transparent,
      transition: 'all 0.35s ease',

      '&:hover': {
        backgroundColor: colors.transparent,
      },
    },
  },
  buttonSize: {
    small: {
      height: '38px',
      paddingLeft: '15px',
      paddingRight: '15px',
      fontSize: '14px',
      borderRadius: '6px',
    },
    medium: {
      height: '44px',
      paddingLeft: '20px',
      paddingRight: '20px',
      fontSize: '14px',
    },
  },
};

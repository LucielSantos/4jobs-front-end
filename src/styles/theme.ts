export default {
  colors: {
    one: '#0A005C',
    two: '#6942B6',
    three: '#3C21B7',
    four: '#FFFFFF',
    five: '#000000',
    six: '#8DABC4',
    seven: '#F44336',
    eighth: '#e6e6e6',

    background: '#F3F3F3',

    loginBackground: 'linear-gradient(180deg, #0A005C 0%, #250042 100%)',
  },
  icon: {
    sizes: {
      xs: '2rem',
      sm: '3rem',
      md: '4rem',
      lg: '5rem',
      xl: '6rem',
    },
  },
  typography: {
    // eslint-disable-next-line prettier/prettier
    family: '\'Ubuntu\', sans-serif',
    sizes: {
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '2.2rem',
      xl: '2.6rem',
    },
    weight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    colors: {
      one: '#171923',
      two: '#FFFFFF',
      three: '#8DABC4',
    },
  },
  spacings: {
    xs: '1rem',
    sm: '2rem',
    md: '3rem',
    lg: '4rem',
    xl: '5rem',
    auto: 'auto',
  },
  buttons: {
    borderRadius: '0.4rem',

    primary: {
      background: '#3C21B7',
      color: '#FFFFFF',

      disabled: {
        background: '#AA97FF',
        color: '#FFFFFF',
      },
    },
    secondary: {
      background: '#6942B6',
      color: '#FFFFFF',

      disabled: {
        background: '#D9C6FF',
        color: '#FFFFFF',
      },
    },
    tertiary: {
      background: '#FFFFFF',
      color: '#8DABC4',

      disabled: {
        background: '#FFFFFF',
        color: '#8DABC4',
      },
    },
    danger: {
      background: '#D13135',
      color: '#FFFFFF',

      disabled: {
        background: '#FFB4B6',
        color: '#FFFFFF',
      },
    },
  },
};

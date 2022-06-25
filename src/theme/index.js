const { extendTheme } = require('@chakra-ui/react');

const colors = {
  brand: {
    white: '#fff',
    black: '#000',
  },
};

const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    '*': {
      boxSizing: 'border-box',
    },
    body: {
      fontSize: '1.4rem',
      bg: 'brand.white',
      color: 'brand.black',
    },
  },
};

const theme = {
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
};

const customTheme = extendTheme({ colors, styles, theme });

export { customTheme };

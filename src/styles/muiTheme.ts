import { createMuiTheme } from '@material-ui/core';
import { darken, lighten } from 'polished';
import theme from './theme';

export default createMuiTheme({
  palette: {
    primary: {
      light: lighten(0.2, theme.colors.one),
      main: theme.colors.one,
      dark: darken(0.2, theme.colors.one),
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: 'Ubuntu, sans-serif',
  },
});

import { ThemeProvider as MUIThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { routePaths } from './routes';
import store from './store';
import muiTheme from './styles/muiTheme';
import theme from './styles/theme';

import Main from './pages/Main';
import { globalStye as GlobalStyle } from './styles/global';
import { history } from './utils';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MUIThemeProvider theme={muiTheme}>
        <Provider store={store}>
          <SnackbarProvider maxSnack={5}>
            <Router history={history}>
              <Switch>
                <Route path={routePaths.MAIN} component={Main} />
              </Switch>
            </Router>
          </SnackbarProvider>

          <GlobalStyle />
        </Provider>
      </MUIThemeProvider>
    </ThemeProvider>
  );
};

export default App;

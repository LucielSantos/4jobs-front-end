import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core';

import store from './store';
import { routePaths } from './routes';
import theme from './styles/theme';
import muiTheme from './styles/muiTheme';

import { globalStye as GlobalStyle } from './styles/global';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MUIThemeProvider theme={muiTheme}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path={routePaths.MAIN} component={Main} />
            </Switch>

            <GlobalStyle />
          </Router>
        </Provider>
      </MUIThemeProvider>
    </ThemeProvider>
  );
};

export default App;

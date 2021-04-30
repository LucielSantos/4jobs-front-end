import React, { useCallback, useLayoutEffect } from 'react';
import { MainViewProps } from '.';
import { userType } from '../../constants';
import { navbarStateByRoute, routePaths } from '../../routes';

import { Router } from '../../routes/components';
import { isAuthenticated } from '../../utils';
import { Navbar, Notifier } from './components';

import { Container } from './styles';

export const MainView: React.FC<MainViewProps> = ({
  history,
  onSetNavbarState,
  navbar,
}) => {
  const switchNavbarState = useCallback(
    (path: string) => {
      if (navbarStateByRoute[path]) {
        onSetNavbarState(navbarStateByRoute[path]);
      } else {
        onSetNavbarState(navbarStateByRoute.default);
      }
    },
    [onSetNavbarState]
  );

  const redirectPage = useCallback(() => {
    // TODO: implements redirect candidate

    if (isAuthenticated(userType.company)) history.push(routePaths.COMPANY_JOBS);

    if (history.location.pathname === '/') history.push(routePaths.LOGIN);
  }, [history]);

  useLayoutEffect(() => {
    redirectPage();

    switchNavbarState(history.location.pathname);

    history.listen(location => {
      switchNavbarState(location.pathname);
    });

    history.listen(location => {
      if (location.pathname === '/' || location.pathname === routePaths.LOGIN)
        redirectPage();
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Navbar navbarState={navbar} history={history} />

      <Router />

      <Notifier />
    </Container>
  );
};

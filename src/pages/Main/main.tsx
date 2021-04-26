import React, { useCallback, useLayoutEffect } from 'react';
import { MainViewProps } from '.';
import { navbarStateByRoute, routePaths } from '../../routes';

import { Router } from '../../routes/components';
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
    if (history.location.pathname === '/') history.push(routePaths.LOGIN);
  }, [history]);

  useLayoutEffect(() => {
    redirectPage();

    switchNavbarState(history.location.pathname);

    history.listen(location => {
      switchNavbarState(location.pathname);
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

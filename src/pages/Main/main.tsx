import React, { useCallback, useLayoutEffect } from 'react';
import { MainViewProps } from '.';
import { navbarStateByRoute } from '../../routes';

import { Router } from '../../routes/components';
import { Navbar } from './components';

import { Container } from './styles';

export const MainView: React.FC<MainViewProps> = ({
  history,
  onSetNavbarState,
  navbar,
}) => {
  const switchNavbarState = useCallback((path: string) => {
    if (navbarStateByRoute[path]) {
      onSetNavbarState(navbarStateByRoute[path]);
    } else {
      onSetNavbarState(navbarStateByRoute.default);
    }
  }, []);

  useLayoutEffect(() => {
    switchNavbarState(history.location.pathname);

    history.listen(location => {
      switchNavbarState(location.pathname);
    });
  }, []);

  return (
    <Container>
      <Navbar navbarState={navbar} />

      <Router />
    </Container>
  );
};

import React, { useCallback, useLayoutEffect, useState } from 'react';
import { MainViewProps } from '.';
import { userTypes } from '../../constants';
import { navbarStateByRoute, routePaths } from '../../routes';

import { Router } from '../../routes/components';
import { getLoggedUser, getUserType, isAuthenticated } from '../../utils';
import { Navbar, Notifier, Sidebar } from './components';

import { Container, Content, Body } from './styles';

export const MainView: React.FC<MainViewProps> = ({
  history,
  onSetNavbarState,
  navbar,
}) => {
  // eslint-disable-next-line
  const [loggedUser, setLoggedUser] = useState(getLoggedUser());
  const [loggedUserType, setLoggedUserType] = useState(getUserType());

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
    if (history.location.pathname === '/' || location.pathname === routePaths.LOGIN) {
      if (isAuthenticated(userTypes.company)) {
        history.push(routePaths.COMPANY_JOBS);
        return;
      }

      if (isAuthenticated(userTypes.candidate)) {
        history.push(routePaths.CANDIDATE_JOBS);
      }
    }
  }, [history]);

  const actualizeLoggedUser = useCallback(() => {
    setLoggedUser(getLoggedUser());
    setLoggedUserType(getUserType());
  }, []);

  useLayoutEffect(() => {
    redirectPage();

    switchNavbarState(history.location.pathname);

    history.listen(location => {
      switchNavbarState(location.pathname);
      actualizeLoggedUser();
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

      <Content>
        {loggedUserType && history.location.pathname !== routePaths.PRE_JOB ? (
          <Sidebar userType={loggedUserType} history={history} />
        ) : null}

        <Body isLoggedUser={!!loggedUser}>
          <Router />
        </Body>
      </Content>

      <Notifier />
    </Container>
  );
};

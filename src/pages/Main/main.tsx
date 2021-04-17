import React, { useLayoutEffect } from 'react';
import { MainViewProps } from '.';
import { routePaths } from '../../routes';

import { Router } from '../../routes/components';

import { Container } from './styles';

export const MainView: React.FC<MainViewProps> = ({ history }) => {
  useLayoutEffect(() => {
    history.push(routePaths.LOGIN);
  }, []);

  return (
    <Container>
      <Router />
    </Container>
  );
};

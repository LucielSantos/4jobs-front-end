import React from 'react';
import { MainViewProps } from '.';

import { Router } from '../../routes/components';

import { Container } from './styles';

export const MainView: React.FC<MainViewProps> = ({ data, history }) => {
  return (
    <Container>
      <Router />
    </Container>
  );
};

import React from 'react';

import { Container } from './styles';
import { Column } from '../';

interface IProps {}

const BodyComponent: React.FC<IProps> = () => {
  return (
    <Container>
      <Column title="Uma" columnId="one" />

      <Column title="Duas" columnId="two" />

      <Column title="Três" columnId="three" />

      <Column title="Quatro" columnId="four" />
    </Container>
  );
};

export const Body = React.memo(BodyComponent);

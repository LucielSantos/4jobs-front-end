import React from 'react';

import { StyledInput, Container } from './styles';

interface Props {}

const InputComponent: React.FC<Props> = () => {
  return (
    <Container>
      <StyledInput placeholder="large size" size="lg" variant="filled" />
    </Container>
  );
};

export const Input = React.memo(InputComponent);

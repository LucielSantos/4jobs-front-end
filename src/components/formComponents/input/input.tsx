import React from 'react';

import { StyledInput, Container } from './styles';

interface Props {}

const InputComponent: React.FC<Props> = () => {
  return (
    <Container>
      <StyledInput label="nome" variant="outlined" />
    </Container>
  );
};

export const Input = React.memo(InputComponent);

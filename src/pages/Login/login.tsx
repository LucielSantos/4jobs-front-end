import React, { useEffect } from 'react';
import { Input } from '@chakra-ui/react';
import { LoginViewProps } from '.';
import { Typography } from '../../components';

import { Container, FormContainer } from './styles';

export const LoginView: React.FC<LoginViewProps> = ({
  handleLogin,
  history,
}) => {
  useEffect(() => {
    handleLogin({ login: 'username', password: 'q1w2e3r4' });
  }, []);

  return (
    <Container>
      <FormContainer>
        <Typography color="two" size="lg" weight="regular">
          Faça login
          <Input placeholder="large size" size="lg" />
        </Typography>
      </FormContainer>
    </Container>
  );
};

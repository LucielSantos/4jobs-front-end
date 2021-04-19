import React, { useCallback, useEffect } from 'react';
import { LoginViewProps } from '.';
import { Typography, Input, Form, Button } from '../../components';
import { loginValidationSchema } from '../../validationSchemas';

import { Container, FormContainer } from './styles';

export const LoginView: React.FC<LoginViewProps> = ({
  handleLogin,
  history,
}) => {
  useEffect(() => {
    handleLogin({ login: 'username', password: 'q1w2e3r4' });
  }, []);

  const handleSubmit = useCallback(values => {
    console.log(values);
  }, []);

  return (
    <Container>
      <FormContainer>
        <Typography color="two" size="lg" weight="regular" marginBottom="xl">
          Faça login
        </Typography>

        <Form onSubmit={handleSubmit} validationSchema={loginValidationSchema}>
          <Input
            label="Nome"
            separatedLabel
            labelColor="two"
            placeholder="Nome de usuário ou email"
            name="name"
          />

          <Input
            label="Senha"
            separatedLabel
            labelColor="two"
            placeholder="Nome de usuário ou email"
            name="password"
          />

          <Button type="submit" fullWidth marginBottom="xs" marginTop="xs">
            Login
          </Button>

          <Button fullWidth variant="secondary">
            Cadastrar-se
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

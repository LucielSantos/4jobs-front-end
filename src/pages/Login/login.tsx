import React, { useCallback, useEffect } from 'react';
import { LoginViewProps } from '.';
import { Typography, Input, Form, Button } from '../../components';
import { loginValidationSchema } from '../../validationSchemas';

import { Container, FormContainer } from './styles';
import { ChoseSignUpTypeModal } from './components';

export const LoginView: React.FC<LoginViewProps> = ({
  handleLogin,
  handleSetDialog,
  history,
  login: { dialogs },
}) => {
  useEffect(() => {
    handleLogin({ login: 'username', password: 'q1w2e3r4' });
  }, []);

  const handleSubmit = useCallback(values => {
    console.log(values);
  }, []);

  const handleChoseSignUpTypeModal = useCallback((value: boolean = false) => {
    handleSetDialog('chooseSignUpType', value);
  }, []);

  return (
    <Container>
      <FormContainer>
        <Typography color="two" size="xl" weight="regular" marginBottom="xl">
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

          <Button
            fullWidth
            variant="secondary"
            onClick={() => handleChoseSignUpTypeModal(true)}
          >
            Cadastrar-se
          </Button>
        </Form>
      </FormContainer>

      <ChoseSignUpTypeModal
        open={dialogs.chooseSignUpType}
        handleClose={handleChoseSignUpTypeModal}
        history={history}
      />
    </Container>
  );
};

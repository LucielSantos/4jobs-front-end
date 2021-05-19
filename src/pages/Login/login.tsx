import React, { useCallback, useMemo } from 'react';
import { LoginViewProps } from '.';
import { Typography, Input, Form, Button, InputPassword } from '../../components';
import { loginValidationSchema } from '../../validationSchemas';

import { Container, FormContainer } from './styles';
import { ChoseSignUpTypeModal } from './components';
import { ILogin } from '../../store/ducks/login/types';
import { querySearchParse } from '../../utils';

export const LoginView: React.FC<LoginViewProps> = ({
  handleLogin,
  handleSetDialog,
  history,
  login: { dialogs, loading },
}) => {
  const searchParams = useMemo<{ jobId?: string }>(() => querySearchParse(), []);

  const handleSubmit = useCallback(
    (values: ILogin) => {
      handleLogin(values, searchParams.jobId || false);
    },
    [handleLogin, searchParams]
  );

  const handleChoseSignUpTypeModal = useCallback(
    (value: boolean = false) => {
      handleSetDialog('chooseSignUpType', value);
    },
    [handleSetDialog]
  );

  return (
    <Container>
      <FormContainer>
        <Typography color="two" size="xl" weight="regular" marginBottom="xl">
          Faça login
        </Typography>

        <Form onSubmit={handleSubmit} validationSchema={loginValidationSchema}>
          <Input
            label="Login"
            separatedLabel
            labelColor="two"
            placeholder="Nome de usuário ou email"
            name="login"
          />

          <InputPassword
            label="Senha"
            separatedLabel
            labelColor="two"
            placeholder="Nome de usuário ou email"
            name="password"
          />

          <Button
            type="submit"
            fullWidth
            marginBottom="xs"
            marginTop="xs"
            isLoading={loading}
          >
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

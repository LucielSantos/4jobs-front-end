import React, { useCallback } from 'react';
import { TCreateCandidateProps } from '.';
import { Button, Flex, Form, Input, InputPassword, Typography } from '../../components';
import { createCandidateValidationSchema } from '../../validationSchemas';

import { Container } from './styles';

export const CreateCandidateView: React.FC<TCreateCandidateProps> = ({
  setStateModal,
}) => {
  const onSubmit = useCallback(data => {
    console.log(data);
  }, []);

  const onClickCancel = useCallback(() => setStateModal(0), [setStateModal]);

  return (
    <Container>
      <Form onSubmit={onSubmit} validationSchema={createCandidateValidationSchema}>
        <Input name="email" label="Email" />

        <Input name="userName" label="Nome de usuário" />

        <InputPassword name="password" label="Senha" />

        <InputPassword name="confirmPassword" label="Confirmar senha" />

        <Typography size="sm">
          A senha deve conter: <br /> &nbsp; • Mínimo 8 (oito) caractéres; <br /> &nbsp; •
          Mínimo uma letra minuscula; <br /> &nbsp; • Mínimo uma letra maiúscula; <br />{' '}
          &nbsp; • Mínimo um número.
        </Typography>

        <Flex flexDirection="column">
          <Button type="submit" marginTop="sm" fullWidth>
            Cadastrar-se
          </Button>

          <Button marginTop="sm" fullWidth variant="tertiary" onClick={onClickCancel}>
            Cancelar
          </Button>
        </Flex>
      </Form>
    </Container>
  );
};

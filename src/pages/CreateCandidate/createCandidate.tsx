import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef } from 'react';
import { TCreateCandidateProps } from '.';
import { Button, Flex, Form, Input, InputPassword, Typography } from '../../components';
import { ICreateCandidateData } from '../../store/ducks/createCandidate/types';
import { openNotification, setFormErrors } from '../../utils';
import { createCandidateValidationSchema } from '../../validationSchemas';

import { Container } from './styles';

export const CreateCandidateView: React.FC<TCreateCandidateProps> = ({
  setStateModal,
  handleCreateCandidate,
  loadings,
  error,
  errorResponse,
}) => {
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    if (error === 'error') setFormErrors(formRef, errorResponse);

    if (error === 'success') {
      openNotification('Candidato criado com sucesso');
      setStateModal(0);
    }
    // eslint-disable-next-line
  }, [error]);

  const onSubmit = useCallback(
    (data: ICreateCandidateData) => {
      handleCreateCandidate(data);
    },
    [handleCreateCandidate]
  );

  const onClickCancel = useCallback(() => setStateModal(0), [setStateModal]);

  return (
    <Container>
      <Form onSubmit={onSubmit} validationSchema={createCandidateValidationSchema} ref={formRef}>
        <Input name="email" label="Email" />

        <Input name="name" label="Nome de usuário" />

        <InputPassword name="password" label="Senha" />

        <InputPassword name="confirmPassword" label="Confirmar senha" />

        <Typography size="sm">
          A senha deve conter: <br /> &nbsp; • Mínimo 8 (oito) caractéres; <br /> &nbsp; • Mínimo
          uma letra minuscula; <br /> &nbsp; • Mínimo uma letra maiúscula; <br /> &nbsp; • Mínimo um
          número.
        </Typography>

        <Flex flexDirection="column">
          <Button type="submit" marginTop="sm" fullWidth isLoading={loadings.create}>
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

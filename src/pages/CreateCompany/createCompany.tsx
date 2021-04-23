import { SubmitHandler } from '@unform/core';
import React, { useCallback } from 'react';
import { TCreateCompanyViewProps } from '.';
import { Icon } from '../../assets/icons';
import {
  BodyContainer,
  Button,
  Flex,
  Form,
  Input,
  PageContainer,
  Typography,
} from '../../components';

export const CreateCompanyView: React.FC<TCreateCompanyViewProps> = ({
  handleCreateCompany,
}) => {
  const onSubmitForm = useCallback<SubmitHandler>(data => {
    console.log(data);
  }, []);

  return (
    <PageContainer>
      <Flex alignItems="center">
        <Icon name="arrowBack" clickable size="sm" isButton />

        <Typography size="lg" marginLeft="sm">
          Empresa - Cadastrar-se
        </Typography>
      </Flex>

      <BodyContainer>
        <Form onSubmit={onSubmitForm}>
          <Input name="name" label="Nome da empresa" />

          <Button type="submit">Castrar-se</Button>
        </Form>
      </BodyContainer>
    </PageContainer>
  );
};

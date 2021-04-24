import { Grid } from '@material-ui/core';
import { SubmitHandler } from '@unform/core';
import React, { useCallback } from 'react';
import { TCreateCompanyViewProps } from '.';
import { Icon } from '../../assets/icons';
import {
  BodyContainer,
  Button,
  Flex,
  Form,
  ImageInput,
  Input,
  InputPassword,
  MaskedInput,
  PageContainer,
  Select,
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
          <Grid container>
            <Grid item xs={7}>
              <Flex alignItems="flex-end">
                <ImageInput name="image" />

                <Input name="name" label="Nome da empresa" marginLeft />
              </Flex>
            </Grid>

            <Grid container alignItems="flex-end" item xs={5}>
              <Input name="responsibleName" label="Nome do responsável" marginLeft />
            </Grid>

            <Grid item xs={4}>
              <MaskedInput name="cnpj" label="CNPJ" mask="cnpj" />
            </Grid>

            <Grid item xs={3}>
              <Input name="phone" label="Telefone para contato" marginLeft />
            </Grid>

            <Grid item xs={2}>
              <Select
                name="state"
                label="UF"
                marginLeft
                options={[
                  { value: 'idUm', label: 'um' },
                  { value: 'idDois', label: 'dois' },
                  { value: 'idTres', label: 'tres' },
                ]}
              />
            </Grid>

            <Grid item xs={3}>
              <Select
                name="city"
                label="Cidade"
                marginLeft
                options={[
                  { value: 'idUm', label: 'um' },
                  { value: 'idDois', label: 'dois' },
                  { value: 'idTres', label: 'tres' },
                ]}
              />
            </Grid>

            <Grid item xs={4}>
              <InputPassword name="password" label="Senha" />
            </Grid>

            <Grid item xs={4}>
              <InputPassword name="confirmPassword" label="Confirmar senha" marginLeft />
            </Grid>

            <Grid container />

            <Grid item xs={12}>
              <Input name="description" label="Descrição" multiline rows={4} />
            </Grid>
          </Grid>

          <Button type="submit">Castrar-se</Button>
        </Form>
      </BodyContainer>
    </PageContainer>
  );
};

import { Grid } from '@material-ui/core';
import { SubmitHandler } from '@unform/core';
import React, { useCallback, useEffect } from 'react';
import { Icon } from '../../assets/icons';
import {
  Button,
  ContentContainer,
  Flex,
  Form,
  Input,
  MaskedInput,
  TagInput,
  Typography,
} from '../../components';
import { goBack } from '../../utils';
import { TCreateJobProps } from './';
import { CreateFormModal } from './components';

export const CreateJobView: React.FC<TCreateJobProps> = ({
  dialogs,
  history,
  onLoadPage,
  onSetDialog,
}) => {
  useEffect(() => {
    onLoadPage();
  }, [onLoadPage]);

  const handleSubmit = useCallback<SubmitHandler>(data => {
    console.log(data);
  }, []);

  const onClickFormButton = useCallback(() => {
    onSetDialog('crateForm', true);
  }, [onSetDialog]);

  const handleCloseFormModal = useCallback(() => {
    onSetDialog('crateForm', false);
  }, [onSetDialog]);

  return (
    <div>
      <Flex>
        <Icon name="arrowBack" clickable size="sm" isButton onClick={goBack} />

        <Typography size="xl" marginLeft="sm">
          Criar vaga
        </Typography>
      </Flex>

      <ContentContainer margin="3rem 0">
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Input name="name" label="Título da vaga" floatingError />
            </Grid>

            <Grid item xs={12} sm={4}>
              <MaskedInput
                name="deadlineResolve"
                label="Prazo para resolução do desafio (dias)"
                floatingError
              />
            </Grid>

            <Grid item xs={12}>
              <Input
                name="description"
                label="Descrição"
                multiline
                rows={4}
                floatingError
              />
            </Grid>

            <Grid item xs={12}>
              <Input
                name="expectedResolution"
                label="Solução esperada para o desafio"
                multiline
                rows={4}
                floatingError
              />
            </Grid>

            <Grid item xs={12}>
              <Input
                name="observations"
                label="Observações"
                multiline
                rows={4}
                floatingError
              />
            </Grid>

            <Grid item xs={12}>
              <TagInput name="tags" label="Relacionar tags" floatingError isRequired />
            </Grid>

            <Grid item xs={12}>
              <Flex>
                <Button
                  marginRight="auto"
                  variant="secondary"
                  onClick={onClickFormButton}
                >
                  Criar formulário de desafio
                </Button>

                <Button type="submit">Criar vaga</Button>
              </Flex>
            </Grid>
          </Grid>

          <CreateFormModal
            name="fields"
            open={dialogs.crateForm}
            handleClose={handleCloseFormModal}
          />
        </Form>
      </ContentContainer>
    </div>
  );
};

import { Grid } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { Icon } from '../../assets/icons';
import {
  ContentContainer,
  Flex,
  Form,
  Input,
  MaskedInput,
  Typography,
} from '../../components';
import { goBack } from '../../utils';
import { TCreateJobProps } from './';

export const CreateJobView: React.FC<TCreateJobProps> = ({ onLoadPage, history }) => {
  useEffect(() => {
    onLoadPage();
  }, [onLoadPage]);

  const handleSubmit = useCallback(() => {
    history.goBack();
  }, [history]);

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
          </Grid>
        </Form>
      </ContentContainer>
    </div>
  );
};

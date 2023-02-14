import { Grid } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { Icon } from '../../assets/icons';
import { Button, Flex, Form, Input, LoadingMessage, TagInput, Typography } from '../../components';

import { TCandidateProfileProps } from './';
import { Container } from './styles';
import { ICandidateDetails } from '../../types';
import { ICandidateDetailsEdit } from '../../types/candidate';

export const CandidateProfileView: React.FC<TCandidateProfileProps> = ({
  history,
  details,
  loadings,
  handleLoadDetails,
  handleEdit,
}) => {
  useEffect(() => {
    handleLoadDetails();
  }, [handleLoadDetails]);

  const handleBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const onSubmit = useCallback(
    (data: ICandidateDetails) => {
      const submitData: ICandidateDetailsEdit = {
        about: data.about,
        description: data.description,
        experiences: data.experiences,
        formations: data.formations,
        locality: data.locality,
        skills: data.skills,
      };

      handleEdit(submitData);
    },
    [handleEdit]
  );

  return (
    <div>
      <Flex alignItems="center">
        <Icon name="arrowBack" clickable size="sm" isButton onClick={handleBack} />

        <Typography size="lg" marginLeft="sm">
          Meu perfil
        </Typography>
      </Flex>

      {loadings.page ? (
        <LoadingMessage text="Carregando detalhes" />
      ) : (
        <Container>
          <Form onSubmit={onSubmit} initialData={details || {}}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Input name="name" label="Nome" disabled notErrorMargin />
              </Grid>

              <Grid item xs={6}>
                <Input name="email" label="Email" disabled notErrorMargin />
              </Grid>

              <Grid item xs={12}>
                <Input name="locality" label="Localidade" notErrorMargin />
              </Grid>

              <Grid item xs={12}>
                <Input name="about" label="Sobre" multiline rows={4} notErrorMargin />
              </Grid>

              <Grid item xs={12}>
                <Input name="description" label="Descrição" multiline rows={4} notErrorMargin />
              </Grid>

              <Grid item xs={12}>
                <TagInput name="formations" label="Formações" notErrorMargin />
              </Grid>

              <Grid item xs={12}>
                <TagInput name="experiences" label="Experiências" notErrorMargin />
              </Grid>

              <Grid item xs={12}>
                <TagInput name="skills" label="Competências" notErrorMargin />
              </Grid>

              <Grid item xs={12}>
                <Flex>
                  <Button variant="tertiary" onClick={handleBack} marginLeft="auto">
                    Cancelar
                  </Button>

                  <Button type="submit" marginLeft="sm" isLoading={loadings.save}>
                    Editar
                  </Button>
                </Flex>
              </Grid>
            </Grid>
          </Form>
        </Container>
      )}
    </div>
  );
};

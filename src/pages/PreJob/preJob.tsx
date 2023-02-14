import React, { useCallback, useEffect, useMemo } from 'react';
import { Icon } from '../../assets/icons';
import {
  Button,
  Divider,
  Flex,
  JobPreview,
  LoadingMessage,
  Typography,
} from '../../components';
import { routePaths } from '../../routes';
import { querySearchParse, queryStringify } from '../../utils';

import { TPreJobProps } from './';

import { Container } from './styles';

export const PreJobView: React.FC<TPreJobProps> = ({
  history,
  jobPreview,
  loadings,
  handleLoadJobPreview,
}) => {
  const searchParams = useMemo<{ jobId?: string }>(
    () => querySearchParse(),
    []
  );

  const onEnterScreen = useCallback(() => {
    if (!searchParams?.jobId) {
      return history.push(routePaths.LOGIN);
    }

    handleLoadJobPreview(searchParams.jobId);
  }, [handleLoadJobPreview, history, searchParams]);

  useEffect(() => {
    onEnterScreen();
  }, [onEnterScreen]);

  const handleBack = useCallback(
    () => history.push(routePaths.LOGIN),
    [history]
  );

  const handleClickConfirm = useCallback(() => {
    console.log('handleClickConfirm');

    if (searchParams?.jobId) {
      history.push(
        `${routePaths.LOGIN}${queryStringify({ jobId: searchParams.jobId })}`
      );
    }
  }, [searchParams, history]);

  return (
    <Flex justifyItems="center">
      <Container>
        <Flex alignItems="center">
          <Icon
            name="arrowBack"
            size="sm"
            isButton
            clickable
            onClick={handleBack}
          />

          <Typography size="lg" marginLeft="sm">
            Pré visualizar vaga{' '}
          </Typography>
        </Flex>

        <Divider margin="2rem" />

        {loadings.page ? (
          <LoadingMessage text="Carregando vaga" />
        ) : (
          <Flex
            flexDirection="column"
            backgroundColor="four"
            borderRadius="8px"
            padding="0 3rem 2rem 3rem"
          >
            <JobPreview job={jobPreview} />

            <Flex marginTop="md">
              <Button variant="tertiary" onClick={handleBack} marginLeft="auto">
                Cancelar
              </Button>

              <Button marginLeft="sm" onClick={handleClickConfirm}>
                Realizar login e confirmar candidatura
              </Button>
            </Flex>
          </Flex>
        )}
      </Container>
    </Flex>
  );
};

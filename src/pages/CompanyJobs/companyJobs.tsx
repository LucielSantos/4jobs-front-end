import React, { useCallback, useEffect } from 'react';

import { Button, Flex, LoadingMessage, Typography } from '../../components';
import { routePaths } from '../../routes';
import { TCompanyJobsProps } from './';
import { Container } from './styles';
import { JobList } from './components';

export const CompanyJobsView: React.FC<TCompanyJobsProps> = ({
  history,
  loadings,
  jobs,
  onLoadJobs,
}) => {
  useEffect(() => {
    onLoadJobs();
  }, [onLoadJobs]);

  const onClickNewJob = useCallback(() => {
    history.push(routePaths.CREATE_JOB);
  }, [history]);

  return (
    <Container>
      <Flex>
        <Typography size="xl">Vagas</Typography>

        <Button
          onClick={onClickNewJob}
          marginLeft="auto"
          leftIcon={{
            name: 'add',
            size: 'xs',
            color: 'four',
          }}
        >
          Nova vaga
        </Button>
      </Flex>

      {loadings.loadJobs ? (
        <Flex marginTop="xl">
          <LoadingMessage text="Carregando vagas" />
        </Flex>
      ) : (
        <JobList jobs={jobs} />
      )}
    </Container>
  );
};

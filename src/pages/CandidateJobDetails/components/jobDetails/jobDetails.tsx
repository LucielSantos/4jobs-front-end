import React, { useMemo } from 'react';
import { Button, Flex, Tags, Typography } from '../../../../components';
import { IJobCandidateDetails } from '../../../../types';

import { Container } from './styles';

interface IProps {
  jobDetails: IJobCandidateDetails;
  onClickReply(): void;
}

const JobDetailsComponent: React.FC<IProps> = ({ jobDetails, onClickReply }) => {
  const { job } = useMemo(() => jobDetails, [jobDetails]);

  return (
    <Container>
      <Typography size="lg">{job.title}</Typography>

      <Typography marginTop="lg" color="three">
        Prazo pra resolver o desafio:
      </Typography>
      {/* TODO: calculate deadline resolve */}
      <Typography marginTop="xs">{job.deadlineResolve}</Typography>

      <Typography marginTop="md" color="three">
        Descrição:
      </Typography>
      <Typography marginTop="xs">{job.description}</Typography>

      <Typography marginTop="md" color="three">
        Resolução esperada:
      </Typography>
      <Typography marginTop="xs">{job.expectedResolution}</Typography>

      <Typography marginTop="md" color="three">
        Observações
      </Typography>
      <Typography marginTop="xs">{job.observations}</Typography>

      <Typography marginTop="md" marginBottom="xs" color="three">
        Tags relacionadas:
      </Typography>
      <Tags items={job.tags} />

      <Flex>
        <Button variant="secondary" marginLeft="auto" onClick={onClickReply}>
          Responder formulário
        </Button>
      </Flex>
    </Container>
  );
};

export const JobDetails = React.memo(JobDetailsComponent);

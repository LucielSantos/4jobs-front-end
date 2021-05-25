import React, { useMemo } from 'react';
import { Button, Flex, Tags, Tooltip, Typography } from '../../../../components';
import { jobResponseTypes } from '../../../../constants';
import { IJobCandidateDetails } from '../../../../types';

import { Container } from './styles';

interface IProps {
  jobDetails: IJobCandidateDetails;
  onClickReply(): void;
}

const renderReplyTooltip = (jobStatus: IJobCandidateDetails['status']) => {
  if (jobStatus === jobResponseTypes.registered) {
    return 'Aguarde a empresa liberar o fomulário';
  }

  if (jobStatus === jobResponseTypes.answered) {
    return 'Aguarde a empresa avaliar a sua resposta';
  }

  if (jobStatus === jobResponseTypes.answering) {
    return false;
  }

  if (jobStatus === jobResponseTypes.returned) {
    return 'Responda novamente ao formulário';
  }

  return false;
};

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

      <Flex marginLeft="auto" notFullWidth>
        <Tooltip text={renderReplyTooltip(jobDetails.status)}>
          <Button
            variant="secondary"
            onClick={onClickReply}
            disabled={
              jobDetails.status !== jobResponseTypes.answering &&
              jobDetails.status !== jobResponseTypes.returned
            }
          >
            Responder formulário
          </Button>
        </Tooltip>
      </Flex>
    </Container>
  );
};

export const JobDetails = React.memo(JobDetailsComponent);

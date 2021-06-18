import { add } from 'date-fns';
import React, { useMemo } from 'react';
import { Icon } from '../../../../assets/icons';
import { Button, Flex, Tags, Tooltip, Typography } from '../../../../components';
import { jobResponseTypes, jobResponseTypesLabels } from '../../../../constants';
import { IJobCandidateDetails } from '../../../../types';
import { formatDate } from '../../../../utils';

import { Container } from './styles';

interface IProps {
  jobDetails: IJobCandidateDetails;
  onClickReply(): void;
  onClickMessage(): void;
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

const JobDetailsComponent: React.FC<IProps> = ({
  jobDetails,
  onClickReply,
  onClickMessage,
}) => {
  const { job } = useMemo(() => jobDetails, [jobDetails]);

  return (
    <Container>
      <Flex>
        <Typography size="lg">{job.title}</Typography>

        <Icon
          name="message"
          marginLeft="auto"
          clickable
          onClick={onClickMessage}
          size="sm"
        />
      </Flex>

      <Typography marginTop="lg" color="three">
        Prazo pra resolver o desafio:
      </Typography>
      <Typography marginTop="xs">
        {formatDate(add(new Date(jobDetails.created_at), { days: job.deadlineResolve }))}
      </Typography>

      <Typography marginTop="md" color="three">
        Status:
      </Typography>
      <Typography marginTop="xs">{jobResponseTypesLabels[jobDetails.status]}</Typography>

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

      {jobDetails.status !== jobResponseTypes.registered && (
        <>
          <Typography marginTop="md" color="three">
            Observações após pré-avaliação
          </Typography>
          <Typography marginTop="xs">{job.observationsAfterEvaluation}</Typography>
        </>
      )}

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

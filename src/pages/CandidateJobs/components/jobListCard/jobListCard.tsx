import { add } from 'date-fns';
import React, { useCallback } from 'react';

import { Icon } from '../../../../assets/icons';
import { Divider, Flex, Typography } from '../../../../components';
import { jobResponseTypes, jobResponseTypesLabels } from '../../../../constants';
import { IJobCandidateList } from '../../../../types';
import { formatDate } from '../../../../utils';

import { Container, Header, Footer, FooterLeftColumn, FooterRightColumn } from './styles';

interface IProps {
  job: IJobCandidateList;
  onClickCard(job: IJobCandidateList): void;
  onClickMessage(jobId: string): void;
}

const JobListCardComponent: React.FC<IProps> = ({ job, onClickCard, onClickMessage }) => {
  const handleClickMessage = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();

      onClickMessage(job.id);
    },
    [job, onClickMessage]
  );

  return (
    <Container onClick={() => onClickCard(job)}>
      <Header>
        <Flex alignItems="center">
          <Typography size="lg" marginRight="auto">
            {job.job.title}
          </Typography>

          <Icon
            name="message"
            marginLeft="auto"
            clickable
            onClick={handleClickMessage}
            size="sm"
          />
        </Flex>

        <Flex>
          <Typography size="sm" marginTop="xs">
            {job.job.description}
          </Typography>
        </Flex>
      </Header>

      <Divider color="two" />

      <Footer>
        <FooterLeftColumn>
          <Typography size="sm" marginBottom="xs">
            Prazo da entrega:{' '}
            {formatDate(add(new Date(job.created_at), { days: job.job.deadlineResolve }))}
          </Typography>
          <Typography size="sm">Status: {jobResponseTypesLabels[job.status]}</Typography>
        </FooterLeftColumn>

        <FooterRightColumn>
          <Typography size="sm" marginTop="auto">
            Desafio resolvido: {job.status === jobResponseTypes.answered ? 'SIM' : 'NÃO'}
          </Typography>
        </FooterRightColumn>
      </Footer>
    </Container>
  );
};

export const JobListCard = React.memo(JobListCardComponent);

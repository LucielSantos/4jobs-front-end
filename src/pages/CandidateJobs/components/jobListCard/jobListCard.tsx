import React from 'react';
import { Divider, Flex, Typography } from '../../../../components';
import { IJobCandidateList } from '../../../../types';

import { Container, Header, Footer, FooterLeftColumn, FooterRightColumn } from './styles';

interface IProps {
  job: IJobCandidateList;
}

const JobListCardComponent: React.FC<IProps> = ({ job }) => {
  return (
    <Container>
      <Header>
        <Flex alignItems="center">
          <Typography size="lg" marginRight="auto">
            {job.job.title}
          </Typography>
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
          {/* TODO: integrate deadline resolve */}
          <Typography size="sm" marginBottom="xs">
            Prazo da entrega: {new Date(job.created_at).toISOString()}
          </Typography>
          {/* TODO: integrate status */}
          <Typography size="sm">Status: xx</Typography>
        </FooterLeftColumn>

        <FooterRightColumn>
          {/* TODO: integrate resolved boolean */}
          <Typography size="sm" marginTop="auto">
            Desafio resolvido: xx
          </Typography>
        </FooterRightColumn>
      </Footer>
    </Container>
  );
};

export const JobListCard = React.memo(JobListCardComponent);

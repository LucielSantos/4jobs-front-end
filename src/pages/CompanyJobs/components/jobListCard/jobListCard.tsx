import React from 'react';
import { Typography } from '../../../../components';

import { IJobInList } from '../../../../store/ducks/companyJobs/types';
import { Container, Header, Footer, FooterLeftColumn, FooterRightColumn } from './styles';

interface IProps {
  job: IJobInList;
}

const JobListCardComponent: React.FC<IProps> = ({ job }) => {
  return (
    <Container>
      <Header>
        <Typography size="lg">{job.title}</Typography>
      </Header>

      <Footer>
        <FooterLeftColumn>
          {/* TODO: integrate candidatos count */}
          <Typography size="sm" marginBottom="xs">
            Candidatos: xx
          </Typography>
          {/* TODO: integrate answered count */}
          <Typography size="sm">Respondidos: xx</Typography>
        </FooterLeftColumn>

        <FooterRightColumn>
          {/* TODO: integrate awaiting resolution count */}
          <Typography size="sm" marginBottom="xs">
            Aguardando resolução: xx
          </Typography>
          {/* TODO: integrate in evaluation count */}
          <Typography size="sm">Em avaliação: xx</Typography>
        </FooterRightColumn>
      </Footer>
    </Container>
  );
};

export const JobListCard = React.memo(JobListCardComponent);

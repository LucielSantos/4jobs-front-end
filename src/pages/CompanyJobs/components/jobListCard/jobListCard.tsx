import React from 'react';
import { Icon } from '../../../../assets/icons';
import { Divider, Flex, Tooltip, Typography } from '../../../../components';

import { IJobInList } from '../../../../store/ducks/companyJobs/types';
import { Container, Header, Footer, FooterLeftColumn, FooterRightColumn } from './styles';

const renderInfoTooltip = (job: IJobInList) => {
  return (
    <>
      Descrição: {job.description} <br />
      Sugestão esperada: {job.description} <br />
      Observações: {job.observations}
    </>
  );
};

interface IProps {
  job: IJobInList;
}

const JobListCardComponent: React.FC<IProps> = ({ job }) => {
  return (
    <Container>
      <Header>
        <Flex alignItems="center">
          <Typography size="lg" marginRight="auto">
            {job.title}
          </Typography>

          <Tooltip text={renderInfoTooltip(job)} placement="top">
            <Icon name="info" size="xs" color="six" />
          </Tooltip>
        </Flex>

        <Flex>
          <Typography size="sm" marginTop="xs">
            {job.description}
          </Typography>
        </Flex>
      </Header>

      <Divider color="two" />

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

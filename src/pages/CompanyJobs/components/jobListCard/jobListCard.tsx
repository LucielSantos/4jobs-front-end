import React, { useCallback } from 'react';
import { Icon } from '../../../../assets/icons';
import { Divider, Flex, Popover, Tooltip, Typography } from '../../../../components';
import { routePaths } from '../../../../routes';

import { IJobInList } from '../../../../store/ducks/companyJobs/types';
import {
  copyToClipboard,
  history,
  openNotification,
  queryStringify,
} from '../../../../utils';
import { Container, Header, Footer, FooterLeftColumn, FooterRightColumn } from './styles';

const renderInfoTooltip = (job: IJobInList) => {
  return (
    <>
      Descrição: {job.description} <br />
      Sugestão esperada: {job.description} <br />
      Observações: {job.observations} <br />
      Observações pós pré-avaliação: {job.observationsAfterEvaluation}
    </>
  );
};

interface IProps {
  job: IJobInList;
}

const JobListCardComponent: React.FC<IProps> = ({ job }) => {
  const handleClickCopyId = useCallback(() => {
    copyToClipboard(job.id, () =>
      openNotification('Identificador copiado para área de transferências')
    );
  }, [job]);

  const handleClickCopyPublicUrl = useCallback(() => {
    const copyUrl = `${location.origin}${routePaths.PRE_JOB}${queryStringify({
      jobId: job.id,
    })}`;

    copyToClipboard(copyUrl, () =>
      openNotification('URL pública copiada para área de transferências')
    );
  }, [job]);

  const handleClickCard = useCallback(() => {
    history.push(`${routePaths.MANAGE_JOB}${queryStringify({ jobId: job.id })}`);
  }, [job]);

  return (
    <Container onClick={handleClickCard}>
      <Header>
        <Flex alignItems="center">
          <Typography size="lg" marginRight="auto">
            {job.title}
          </Typography>

          <Tooltip text={renderInfoTooltip(job)} placement="top">
            <Icon name="info" size="xs" color="six" />
          </Tooltip>

          <Popover
            options={[
              { children: 'Copiar identificador', onClick: handleClickCopyId },
              { children: 'Copiar URL pública', onClick: handleClickCopyPublicUrl },
            ]}
          />
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
          <Typography size="sm" marginBottom="xs">
            Candidatos: {job.candidates}
          </Typography>
          <Typography size="sm">Respondidos: {job.resolved}</Typography>
        </FooterLeftColumn>

        <FooterRightColumn>
          <Typography size="sm" marginBottom="xs">
            Aguardando resolução: {job.answering}
          </Typography>
          <Typography size="sm">Em avaliação: {job.inEvaluation}</Typography>
        </FooterRightColumn>
      </Footer>
    </Container>
  );
};

export const JobListCard = React.memo(JobListCardComponent);

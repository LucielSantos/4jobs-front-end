import React, { useCallback } from 'react';
import { Button, Tooltip, Typography } from '../../../../components';
import { IJobDetails } from '../../../../types';
import { copyToClipboard, openNotification } from '../../../../utils';

import { Container, TitleContainer } from './styles';

interface IProps {
  onCancelRegistrations(): void;
  jobDetails: IJobDetails;
}

const HeaderComponent: React.FC<IProps> = ({ onCancelRegistrations, jobDetails }) => {
  const handleClickIdentifier = useCallback(() => {
    copyToClipboard(jobDetails.id, () =>
      openNotification('Identificador copiado para a área de transferência')
    );
  }, [jobDetails]);

  return (
    <Container>
      <TitleContainer>
        <Typography size="xl">{jobDetails.title} - &nbsp;</Typography>

        <Tooltip placement="top" text="Clique para copiar para área de transferência">
          <Typography onClick={handleClickIdentifier} clickable>
            {jobDetails.id}
          </Typography>
        </Tooltip>
      </TitleContainer>

      <Button onClick={onCancelRegistrations}>Cancelar inscrições</Button>
    </Container>
  );
};

export const Header = React.memo(HeaderComponent);

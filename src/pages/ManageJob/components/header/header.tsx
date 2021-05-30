import React, { useCallback } from 'react';
import { Button, Tooltip, Typography } from '../../../../components';
import { copyToClipboard, openNotification } from '../../../../utils';

import { Container, TitleContainer } from './styles';

interface IProps {
  onCancelRegistrations(): void;
  onCloseJob(): void;
}

const HeaderComponent: React.FC<IProps> = ({ onCancelRegistrations, onCloseJob }) => {
  const handleClickIdentifier = useCallback(() => {
    copyToClipboard('d2a88503-7667-4630-878b-91a24006e370', () =>
      openNotification('Identificador copiado para a área de transferência')
    );
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Typography size="xl">Gerenciar vaga - &nbsp;</Typography>

        <Tooltip placement="top" text="Clique para copiar para área de transferência">
          <Typography onClick={handleClickIdentifier} clickable>
            d2a88503-7667-4630-878b-91a24006e370
          </Typography>
        </Tooltip>
      </TitleContainer>

      <Button onClick={onCancelRegistrations} marginRight="md">
        Cancelar inscrições
      </Button>

      <Button onClick={onCloseJob} variant="secondary">
        Fechar vaga
      </Button>
    </Container>
  );
};

export const Header = React.memo(HeaderComponent);

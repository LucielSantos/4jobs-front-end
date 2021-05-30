import React from 'react';
import { Typography } from '../../../../components';

import { Container, Column, ColumnBody } from './styles';

interface IProps {}

const BodyComponent: React.FC<IProps> = () => {
  return (
    <Container>
      <Column>
        <Typography size="lg">Pré avaliação</Typography>

        <ColumnBody>
          <Typography>Column body</Typography>
        </ColumnBody>
      </Column>

      <Column>
        <Typography size="lg">Em resolução</Typography>

        <ColumnBody>
          <Typography>Column body</Typography>
        </ColumnBody>
      </Column>

      <Column>
        <Typography size="lg">Em avaliação</Typography>

        <ColumnBody>
          <Typography>Column body</Typography>
        </ColumnBody>
      </Column>

      <Column>
        <Typography size="lg">Encerrados</Typography>

        <ColumnBody>
          <Typography>Column body</Typography>
        </ColumnBody>
      </Column>
    </Container>
  );
};

export const Body = React.memo(BodyComponent);

import React, { useCallback } from 'react';
import { TCreateCompanyViewProps } from '.';
import { Button } from '../../components';

import { Container } from './styles';

export const CreateCompanyView: React.FC<TCreateCompanyViewProps> = ({
  handleCreateCompany,
}) => {
  const onCreateCompany = useCallback(() => {
    handleCreateCompany({ name: 'nome da empresa' });
  }, []);

  return (
    <Container>
      <Button onClick={onCreateCompany}>Criar</Button>
    </Container>
  );
};

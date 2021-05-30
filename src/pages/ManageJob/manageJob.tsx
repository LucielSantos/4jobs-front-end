import React, { useCallback, useEffect } from 'react';

import { TManageJobProps } from './';
import { Container } from './styles';
import { Header, Body } from './components';

export const ManageJobView: React.FC<TManageJobProps> = ({ handleLoadCandidates }) => {
  useEffect(() => {
    handleLoadCandidates();
  }, [handleLoadCandidates]);

  const handleCancelRegistrations = useCallback(() => {
    console.log('handleCancelRegistrations');
  }, []);

  const handleCloseJob = useCallback(() => {
    console.log('handleCloseJob');
  }, []);

  return (
    <Container>
      <Header
        onCancelRegistrations={handleCancelRegistrations}
        onCloseJob={handleCloseJob}
      />

      <Body />
    </Container>
  );
};

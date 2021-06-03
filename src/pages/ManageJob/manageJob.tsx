import React, { useCallback, useEffect, useMemo } from 'react';

import { TManageJobProps } from './';
import { Container } from './styles';
import { Header, Body } from './components';
import { goBack, querySearchParse } from '../../utils';
import { IDropData } from '../../types';

export const ManageJobView: React.FC<TManageJobProps> = ({
  candidates,
  handleLoadCandidates,
  handleChangeCandidateStatus,
}) => {
  const { jobId } = useMemo<{ jobId: string }>(() => querySearchParse(), []);

  useEffect(() => {
    if (!jobId) {
      goBack();
    }

    handleLoadCandidates(jobId);
  }, [handleLoadCandidates, jobId]);

  const handleCancelRegistrations = useCallback(() => {
    console.log('handleCancelRegistrations');
  }, []);

  const handleCloseJob = useCallback((...params) => {
    console.log('handleCloseJob');
    console.log(params);
  }, []);

  const handleDropCard = useCallback(
    (dropData: IDropData) => {
      handleChangeCandidateStatus(dropData);
    },
    [handleChangeCandidateStatus]
  );

  return (
    <Container>
      <Header
        onCancelRegistrations={handleCancelRegistrations}
        onCloseJob={handleCloseJob}
      />

      <Body candidates={candidates} handleDropCard={handleDropCard} />
    </Container>
  );
};

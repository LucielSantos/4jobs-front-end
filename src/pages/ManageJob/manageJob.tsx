import React, { useCallback, useEffect, useMemo } from 'react';

import { TManageJobProps } from './';
import { Container } from './styles';
import { Header, Body } from './components';
import { goBack, querySearchParse } from '../../utils';
import { TJobResponseValues } from '../../constants';

export interface IDropData {
  candidateId: string;
  newStatus: TJobResponseValues;
}

export const ManageJobView: React.FC<TManageJobProps> = ({
  handleLoadCandidates,
  candidates,
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

  const handleDropCard = useCallback((dropData: IDropData) => {
    // const data = {
    //   newStatus: result.destination ? parseInt(result.destination?.droppableId) : 1,
    //   candidateId: result.draggableId,
    // };

    // console.log(data);

    console.log(dropData);
  }, []);

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

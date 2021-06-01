import React, { useCallback, useEffect, useMemo } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { TManageJobProps } from './';
import { Container } from './styles';
import { Header, Body } from './components';
import { goBack, querySearchParse } from '../../utils';

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

  const handleDragEnd = useCallback((result: DropResult) => {
    const data = {
      newStatus: result.destination ? parseInt(result.destination?.droppableId) : 1,
      candidateId: result.draggableId,
    };

    console.log(data);
  }, []);

  return (
    <Container>
      <Header
        onCancelRegistrations={handleCancelRegistrations}
        onCloseJob={handleCloseJob}
      />

      <DragDropContext onDragEnd={handleDragEnd}>
        <Body candidates={candidates} />
      </DragDropContext>
    </Container>
  );
};

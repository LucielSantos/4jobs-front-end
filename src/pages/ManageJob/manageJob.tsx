import React, { useCallback, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

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

  const handleDragStart = useCallback(() => {
    console.log('handleDragStart');
  }, []);

  const handleDragUpdate = useCallback(() => {
    console.log('handleDragUpdate');
  }, []);

  const handleDragEnd = useCallback(() => {
    console.log('handleDragEnd');
  }, []);

  return (
    <Container>
      <Header
        onCancelRegistrations={handleCancelRegistrations}
        onCloseJob={handleCloseJob}
      />

      <DragDropContext
        onDragStart={handleDragStart}
        onDragUpdate={handleDragUpdate}
        onDragEnd={handleDragEnd}
      >
        <Body />
      </DragDropContext>
    </Container>
  );
};

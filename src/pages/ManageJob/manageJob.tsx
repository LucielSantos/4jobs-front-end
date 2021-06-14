import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { TManageJobProps } from './';
import { Container } from './styles';
import { Header, Body } from './components';
import { goBack, querySearchParse } from '../../utils';
import { IDropData } from '../../types';
import { jobResponseTypes, TJobResponseValues } from '../../constants';
import { UserDetailsModal } from '../../components';

export const ManageJobView: React.FC<TManageJobProps> = ({
  candidates,
  handleLoadCandidates,
  handleChangeCandidateStatus,
}) => {
  const { jobId } = useMemo<{ jobId: string }>(() => querySearchParse(), []);

  const [dialogs, setDialogs] = useState({ userDetails: false });
  const [selectedCandidateId, setSelectedCandidateId] = useState<false | string>(false);

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

  const handleSetDialog = useCallback((field: string, value: boolean) => {
    setDialogs(oldState => ({ ...oldState, [field]: value }));
  }, []);

  const onClickCandidate = useCallback(
    (candidateId: string, columnId: TJobResponseValues) => {
      console.log(candidateId);
      console.log(columnId);

      if (
        columnId === jobResponseTypes.registered ||
        columnId === jobResponseTypes.answering
      ) {
        setSelectedCandidateId(candidateId);
        handleSetDialog('userDetails', true);
      }
    },
    [handleSetDialog]
  );

  return (
    <Container>
      <Header
        onCancelRegistrations={handleCancelRegistrations}
        onCloseJob={handleCloseJob}
      />

      <Body
        candidates={candidates}
        handleDropCard={handleDropCard}
        onClickCandidate={onClickCandidate}
      />

      {selectedCandidateId && (
        <UserDetailsModal
          open={dialogs.userDetails}
          candidateId={selectedCandidateId}
          handleClose={() => {
            handleSetDialog('userDetails', false);
            setSelectedCandidateId(false);
          }}
        />
      )}
    </Container>
  );
};

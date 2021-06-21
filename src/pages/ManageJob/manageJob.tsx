import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { TManageJobProps } from './';
import { Container } from './styles';
import { Header, Body } from './components';
import { goBack, querySearchParse } from '../../utils';
import { ICandidateByJob, IDropData } from '../../types';
import { jobResponseTypes, TJobResponseValues } from '../../constants';
import {
  MessagesModal,
  UserDetailsModal,
  ViewDynamicFormResponse,
} from '../../components';

export const ManageJobView: React.FC<TManageJobProps> = ({
  candidates,
  handleLoadCandidates,
  handleChangeCandidateStatus,
}) => {
  const { jobId } = useMemo<{ jobId: string }>(() => querySearchParse(), []);

  const [dialogs, setDialogs] = useState({
    userDetails: false,
    messages: false,
    viewResponse: false,
  });
  const [selectedCandidateId, setSelectedCandidateId] = useState<false | string>(false);
  const [selectedJobResponseId, setSelectedJobResponseId] = useState<false | string>(
    false
  );

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
    (candidate: ICandidateByJob, columnId: TJobResponseValues) => {
      setSelectedCandidateId(candidate.id);

      if (
        columnId === jobResponseTypes.registered ||
        columnId === jobResponseTypes.answering
      ) {
        handleSetDialog('userDetails', true);
      }

      if (columnId === jobResponseTypes.inEvaluation) {
        setSelectedJobResponseId(candidate.jobResponseId);

        handleSetDialog('viewResponse', true);
      }
    },
    [handleSetDialog]
  );

  const handleClickMessage = useCallback(
    (candidate: ICandidateByJob) => {
      setSelectedJobResponseId(candidate.jobResponseId);
      handleSetDialog('messages', true);
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
        onClickMessage={handleClickMessage}
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

      {selectedJobResponseId && (
        <MessagesModal
          open={dialogs.messages}
          handleClose={() => {
            handleSetDialog('messages', false);
            setSelectedJobResponseId(false);
          }}
          jobResponseId={selectedJobResponseId}
        />
      )}

      {selectedJobResponseId && (
        <ViewDynamicFormResponse
          open={dialogs.viewResponse}
          handleClose={() => {
            handleSetDialog('viewResponse', false);
            setSelectedJobResponseId(false);
          }}
          jobResponseId={selectedJobResponseId}
        />
      )}
    </Container>
  );
};

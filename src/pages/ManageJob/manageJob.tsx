import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { TManageJobProps } from './';
import { Container } from './styles';
import { Header, Body, SendMessageFinished } from './components';
import { goBack, querySearchParse } from '../../utils';
import { ICandidateByJob, IDropData, IJobDetails } from '../../types';
import { jobResponseTypes, TJobResponseValues, TJobStatus } from '../../constants';
import {
  CancelRegistrationModal,
  LoadingMessage,
  MessagesModal,
  UserDetailsModal,
  ViewDynamicFormResponse,
} from '../../components';
import { useRequest } from '../../hooks';
import { getJobDetails } from '../../services';

export const ManageJobView: React.FC<TManageJobProps> = ({
  candidates,
  handleLoadCandidates,
  handleChangeCandidateStatus,
}) => {
  const { jobId } = useMemo<{ jobId: string }>(() => querySearchParse(), []);

  const [jobDetails, isLoadingDetails, handleGetJobDetails] = useRequest<IJobDetails>({
    handleRequest: getJobDetails,
    initialReqParams: [jobId],
  });

  const [dialogs, setDialogs] = useState({
    userDetails: false,
    messages: false,
    viewResponse: false,
    sendFinishedMessage: false,
    cancelRegistration: false,
  });

  const [tempDropData, setTempDropData] = useState<null | IDropData>(null);
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

  const handleSetDialog = useCallback((field: string, value: boolean) => {
    setDialogs(oldState => ({ ...oldState, [field]: value }));
  }, []);

  const handleCancelRegistrations = useCallback(() => {
    handleSetDialog('cancelRegistration', true);
  }, [handleSetDialog]);

  const handleDropCard = useCallback(
    (dropData: IDropData) => {
      if (dropData.newStatus === jobResponseTypes.finished) {
        setTempDropData(dropData);
        handleSetDialog('sendFinishedMessage', true);

        return '';
      }

      handleChangeCandidateStatus(dropData);
    },
    [handleChangeCandidateStatus, handleSetDialog]
  );

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

  const postConfirmChangeStatus = useCallback(
    (newStatus: TJobStatus) => {
      handleGetJobDetails(jobId);
    },
    [handleGetJobDetails, jobId]
  );

  if (isLoadingDetails && !jobDetails) {
    return <LoadingMessage text="Carregando detalhes da vaga" />;
  }

  return (
    <Container>
      {jobDetails ? (
        <Header
          onCancelRegistrations={handleCancelRegistrations}
          jobDetails={jobDetails}
        />
      ) : null}

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

      {tempDropData && (
        <SendMessageFinished
          open={dialogs.sendFinishedMessage}
          handleClose={() => handleSetDialog('sendFinishedMessage', false)}
          dropData={tempDropData}
          handleChangeCandidateStatus={handleChangeCandidateStatus}
        />
      )}

      {jobDetails && (
        <CancelRegistrationModal
          open={dialogs.cancelRegistration}
          handleClose={() => handleSetDialog('cancelRegistration', false)}
          jobId={jobDetails.id}
          currentJobStatus={jobDetails.status}
          postConfirm={postConfirmChangeStatus}
        />
      )}
    </Container>
  );
};

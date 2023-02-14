import React, { useCallback, useEffect, useState } from 'react';

import { Button, Flex, LoadingMessage, MessagesModal, Typography } from '../../components';
import { routePaths } from '../../routes';
import { IJobCandidateList } from '../../types';
import { queryStringify } from '../../utils';

import { TCandidateJobsProps } from './';
import { ApplyJobModal, JobList } from './components';

export const CandidateJobsView: React.FC<TCandidateJobsProps> = ({
  history,
  dialogs,
  loadings,
  applyModalState,
  jobPreview,
  jobs,
  handleLoadJobs,
  handleGetJobPreview,
  handleCleanApplyModal,
  handleApplyJob,
  onSetCandidateJobDialog,
  handleCleanMessage,
}) => {
  const [selectedJobId, setSelectedJobId] = useState<null | string>(null);

  useEffect(() => {
    handleLoadJobs();
  }, [handleLoadJobs]);

  const onClickApplyJob = useCallback(() => onSetCandidateJobDialog('applyJob', true), [
    onSetCandidateJobDialog,
  ]);

  const handleCloseApplyModal = useCallback(() => onSetCandidateJobDialog('applyJob', false), [
    onSetCandidateJobDialog,
  ]);

  const onClickCard = useCallback(
    (job: IJobCandidateList) => {
      history.push(`${routePaths.CANDIDATE_JOBS_DETAILS}${queryStringify({ jobId: job.id })}`);
    },
    [history]
  );

  const handleClickMessage = useCallback(
    (jobId: string) => {
      handleCleanMessage(jobId);
      setSelectedJobId(jobId);
      onSetCandidateJobDialog('messages', true);
    },
    [onSetCandidateJobDialog, handleCleanMessage]
  );

  return (
    <Flex flexDirection="column">
      <Flex>
        <Typography size="xl">Minhas vagas</Typography>

        <Button
          leftIcon={{ name: 'add', size: 'xs', color: 'four' }}
          marginLeft="auto"
          onClick={onClickApplyJob}
        >
          Adicionar vaga
        </Button>
      </Flex>

      {loadings.loadJobs ? (
        <Flex marginTop="xl">
          <LoadingMessage text="Carregando vagas" />
        </Flex>
      ) : (
        <JobList jobs={jobs} onClickCard={onClickCard} onClickMessage={handleClickMessage} />
      )}

      <ApplyJobModal
        open={dialogs.applyJob}
        applyModalState={applyModalState}
        jobPreview={jobPreview}
        handleClose={handleCloseApplyModal}
        handleGetJobPreview={handleGetJobPreview}
        loadingsGetJobPreview={loadings.getPreview}
        loadingApplyJob={loadings.applyJob}
        handleCleanApplyModal={handleCleanApplyModal}
        handleApplyJob={handleApplyJob}
      />

      {selectedJobId ? (
        <MessagesModal
          open={dialogs.messages}
          handleClose={() => {
            setSelectedJobId(null);
            onSetCandidateJobDialog('messages', false);
          }}
          jobResponseId={selectedJobId}
        />
      ) : null}
    </Flex>
  );
};

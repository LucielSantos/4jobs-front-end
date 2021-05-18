import React, { useCallback, useEffect } from 'react';
import { Button, Flex, LoadingMessage, Typography } from '../../components';

import { TCandidateJobsProps } from './';
import { ApplyJobModal, JobList } from './components';

export const CandidateJobsView: React.FC<TCandidateJobsProps> = ({
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
}) => {
  useEffect(() => {
    handleLoadJobs();
  }, [handleLoadJobs]);

  const onClickApplyJob = useCallback(() => onSetCandidateJobDialog('applyJob', true), [
    onSetCandidateJobDialog,
  ]);

  const handleCloseApplyModal = useCallback(
    () => onSetCandidateJobDialog('applyJob', false),
    [onSetCandidateJobDialog]
  );

  return (
    <Flex flexDirection="column">
      <Flex>
        <Typography size="xl">Candidate - Jobs</Typography>

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
        <JobList jobs={jobs} />
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
    </Flex>
  );
};

import React, { useCallback, useEffect } from 'react';
import { Button, Flex, Typography } from '../../components';

import { TCandidateJobsProps } from './';
import { ApplyJobModal } from './components';

export const CandidateJobsView: React.FC<TCandidateJobsProps> = ({
  dialogs,
  loadings,
  applyModalState,
  jobPreview,
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
    <Flex>
      <Typography size="xl">Candidate - Jobs</Typography>

      <Button
        leftIcon={{ name: 'add', size: 'xs', color: 'four' }}
        marginLeft="auto"
        onClick={onClickApplyJob}
      >
        Adicionar vaga
      </Button>

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

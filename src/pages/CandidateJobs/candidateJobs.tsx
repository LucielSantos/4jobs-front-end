import React, { useCallback, useEffect } from 'react';
import { Button, Flex, Typography } from '../../components';

import { TCandidateJobsProps } from './';

export const CandidateJobsView: React.FC<TCandidateJobsProps> = ({
  handleLoadJobs,
  onSetCandidateJobDialog,
  dialogs,
}) => {
  useEffect(() => {
    handleLoadJobs();
  }, [handleLoadJobs]);

  const onClickApplyJob = useCallback(() => onSetCandidateJobDialog('applyJob', true), [
    onSetCandidateJobDialog,
  ]);

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
    </Flex>
  );
};

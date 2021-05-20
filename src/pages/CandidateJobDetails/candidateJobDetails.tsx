import React, { useCallback, useEffect, useMemo } from 'react';
import { Typography } from '../../components';
import { routePaths } from '../../routes';
import { querySearchParse } from '../../utils';

import { TCandidateJobDetailsProps } from './';

export const CandidateJobDetailsView: React.FC<TCandidateJobDetailsProps> = ({
  history,
  handleLoadJobDetails,
}) => {
  const searchParams = useMemo<{ jobId?: string }>(() => querySearchParse(), []);

  const onEnterScreen = useCallback(() => {
    if (!searchParams?.jobId) {
      history.push(routePaths.CANDIDATE_JOBS);

      return '';
    }

    handleLoadJobDetails(searchParams.jobId);
  }, [handleLoadJobDetails, history, searchParams?.jobId]);

  useEffect(() => {
    onEnterScreen();
  }, [onEnterScreen]);

  return (
    <div>
      <Typography size="xl">CandidateJobDetailsView</Typography>
    </div>
  );
};

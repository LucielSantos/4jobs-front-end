import React, { useEffect } from 'react';
import { Typography } from '../../components';

import { TCandidateJobDetailsProps } from './';

export const CandidateJobDetailsView: React.FC<TCandidateJobDetailsProps> = ({
  onLoadPage,
}) => {
  useEffect(() => {
    onLoadPage();
  }, [onLoadPage]);

  return (
    <div>
      <Typography size="xl">CandidateJobDetailsView</Typography>
    </div>
  );
};

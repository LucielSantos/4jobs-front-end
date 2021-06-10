import React, { useEffect } from 'react';
import { Typography } from '../../components';

import { TCandidateProfileProps } from './';

export const CandidateProfileView: React.FC<TCandidateProfileProps> = ({
  handleLoadDetails,
}) => {
  useEffect(() => {
    handleLoadDetails();
  }, [handleLoadDetails]);

  return (
    <div>
      <Typography size="xl">CandidateProfileView</Typography>
    </div>
  );
};

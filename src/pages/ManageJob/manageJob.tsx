import React, { useEffect } from 'react';
import { Typography } from '../../components';

import { TManageJobProps } from './';

export const ManageJobView: React.FC<TManageJobProps> = ({ handleLoadCandidates }) => {
  useEffect(() => {
    handleLoadCandidates();
  }, [handleLoadCandidates]);

  return (
    <div>
      <Typography size="xl">ManageJobView</Typography>
    </div>
  );
};

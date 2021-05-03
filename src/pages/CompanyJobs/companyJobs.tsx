import React, { useEffect } from 'react';
import { Typography } from '../../components';

import { TCompanyJobsProps } from './';

export const CompanyJobsView: React.FC<TCompanyJobsProps> = ({ onLoadPage }) => {
  useEffect(() => {
    onLoadPage();
  }, [onLoadPage]);

  return (
    <div>
      <Typography size="xl">Company - Jobs</Typography>{' '}
    </div>
  );
};

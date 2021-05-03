import React, { useEffect } from 'react';
import { Button, Flex, Typography } from '../../components';

import { TCompanyJobsProps } from './';

export const CompanyJobsView: React.FC<TCompanyJobsProps> = ({ onLoadPage }) => {
  useEffect(() => {
    onLoadPage();
  }, [onLoadPage]);

  return (
    <div>
      <Flex>
        <Typography size="xl">Company - Jobs</Typography>

        <Button
          marginLeft="auto"
          leftIcon={{
            name: 'add',
            size: 'xs',
            color: 'four',
          }}
        >
          Nova vaga
        </Button>
      </Flex>
    </div>
  );
};

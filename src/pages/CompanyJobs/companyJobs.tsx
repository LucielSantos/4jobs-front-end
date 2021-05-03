import React, { useCallback, useEffect } from 'react';
import { Button, Flex, Typography } from '../../components';
import { routePaths } from '../../routes';

import { TCompanyJobsProps } from './';

export const CompanyJobsView: React.FC<TCompanyJobsProps> = ({ onLoadPage, history }) => {
  useEffect(() => {
    onLoadPage();
  }, [onLoadPage]);

  const onClickNewJob = useCallback(() => {
    history.push(routePaths.CREATE_JOB);
  }, [history]);

  return (
    <div>
      <Flex>
        <Typography size="xl">Company - Jobs</Typography>

        <Button
          onClick={onClickNewJob}
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

import React, { useCallback, useEffect } from 'react';
import { Icon } from '../../assets/icons';
import { Flex, Typography } from '../../components';

import { TCreateJobProps } from './';

export const CreateJobView: React.FC<TCreateJobProps> = ({ onLoadPage, history }) => {
  useEffect(() => {
    onLoadPage();
  }, [onLoadPage]);

  const handleBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <div>
      <Flex>
        <Icon name="arrowBack" clickable size="sm" isButton onClick={handleBack} />

        <Typography size="xl" marginLeft="sm">
          Create Job
        </Typography>
      </Flex>
    </div>
  );
};

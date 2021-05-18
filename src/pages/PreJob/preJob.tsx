import React, { useCallback, useEffect, useMemo } from 'react';
import { Flex, Typography } from '../../components';
import { routePaths } from '../../routes';
import { querySearchParse } from '../../utils';

import { TPreJobProps } from './';

import { Container } from './styles';

export const PreJobView: React.FC<TPreJobProps> = ({ onLoadPage, history }) => {
  const searchParams = useMemo<{ jobId?: string }>(() => querySearchParse(), []);

  const onEnterScreen = useCallback(() => {
    if (!searchParams?.jobId) {
      return history.push(routePaths.LOGIN);
    }

    onLoadPage();
  }, [onLoadPage, history, searchParams]);

  useEffect(() => {
    onEnterScreen();
  }, [onEnterScreen]);

  return (
    <Flex justifyItems="center">
      <Container>
        <Typography size="xl">Pre Job - Jobs</Typography>
      </Container>
    </Flex>
  );
};

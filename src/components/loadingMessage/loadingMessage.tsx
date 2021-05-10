import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { Flex } from '../';
import { Typography } from '../typography';

interface IProps {
  text?: string;
}

const LoadingMessageComponent: React.FC<IProps> = ({ text }) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyItems="center">
      <CircularProgress size={50} />

      {text && <Typography>{text}</Typography>}
    </Flex>
  );
};

export const LoadingMessage = React.memo(LoadingMessageComponent);

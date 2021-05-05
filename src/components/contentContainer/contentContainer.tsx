import React from 'react';

import { Container, IContainer } from './styles';

interface IProps extends IContainer {
  children: React.ReactNode;
}

const ContentContainerComponent: React.FC<IProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export const ContentContainer = React.memo(ContentContainerComponent);

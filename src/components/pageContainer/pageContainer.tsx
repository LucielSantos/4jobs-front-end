import React from 'react';

import { Container } from './styles';

interface IProps {}

const PageContainerComponent: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export const PageContainer = React.memo(PageContainerComponent);

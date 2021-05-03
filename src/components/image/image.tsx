import React from 'react';

import { Container, Img } from './styles';

interface IProps {
  src: HTMLImageElement['src'];
}

const ImageComponent: React.FC<IProps> = ({ src }) => {
  return (
    <Container>
      <Img src={src} />
    </Container>
  );
};

export const Image = React.memo(ImageComponent);

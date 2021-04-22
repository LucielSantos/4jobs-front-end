import styled from 'styled-components';

import LogoSrc from '../../../../assets/images/logo.png';

export const Container = styled.div`
  height: 6rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.three};
  color: ${({ theme }) => theme.typography.colors.two};
  padding: 1rem 3rem;
  box-sizing: border-box;
`;

export const Logo = styled.img.attrs({
  src: LogoSrc,
})`
  height: 100%;
  cursor: pointer;
`;

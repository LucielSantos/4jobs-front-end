import styled from 'styled-components';

import LogoSrc from '../../../../assets/images/logo-secondary-full.png';
import { heightNavbar } from '../../../../constants';

export const Container = styled.div`
  height: ${heightNavbar};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.three};
  color: ${({ theme }) => theme.typography.colors.two};
  padding: 1rem 4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;

export const Logo = styled.img.attrs({
  src: LogoSrc,
})`
  height: 80%;
  cursor: pointer;
`;

export const Divider = styled.div`
  height: 100%;
  width: 1px;
  margin: 0 2rem;
  background-color: ${({ theme }) => theme.colors.four};
`;

export const ProfileImage = styled.img`
  height: 100%;
`;

export const ProfileImageContainer = styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.one};
`;

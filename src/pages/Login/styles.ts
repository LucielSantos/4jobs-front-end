import styled from 'styled-components';

import LogoSrc from '../../assets/images/logo-secondary-full.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.loginBackground};
`;

export const FormContainer = styled.div`
  border-radius: 8px;
  background-color: red;
  width: 40rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
`;

export const Logo = styled.img.attrs({
  src: LogoSrc,
})`
  height: 8rem;
  margin-bottom: 5rem;
  margin-top: -13rem;
`;

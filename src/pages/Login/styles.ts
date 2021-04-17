import styled from 'styled-components';

export const Container = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.loginBackground};
`;

export const FormContainer = styled.div`
  border-radius: 4px;
  background-color: red;
  height: 40rem;
  width: 35rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.024) 100%
  );
`;

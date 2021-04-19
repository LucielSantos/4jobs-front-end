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

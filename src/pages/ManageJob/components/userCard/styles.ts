import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.four};
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
`;

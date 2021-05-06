import styled from 'styled-components';

export const FieldContainer = styled.div`
  padding: 0 2rem 2rem 2rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 2rem;

  :first-child {
    margin-top: 0;
  }
`;

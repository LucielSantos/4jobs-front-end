import styled from 'styled-components';

export const BodyContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.four};
  border-radius: 0.4rem;
  padding: 2rem;
  margin: 2rem 0;
  box-sizing: border-box;
  box-shadow: 0 0 12px -4px rgb(0, 0, 0, 0.2);
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  height: inherit;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 1rem;

  &:last-child {
    padding-right: 0;
  }
  &:first-child {
    padding-left: 0;
  }
`;

export const Body = styled.div`
  height: inherit;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.eighth};
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 8px;
`;

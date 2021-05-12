import styled from 'styled-components';

export const Body = styled.div``;

export const Line = styled.div`
  padding: 1rem 2rem;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.colors.six};
  cursor: pointer;
  transition: filter 0.2s, text-shadow 0.2s;
  background-color: white;

  :hover {
    filter: brightness(90%);
    text-shadow: 0px 0px 1px ${({ theme }) => theme.typography.colors.one};
  }

  :active {
    filter: brightness(80%);
  }

  :last-child {
    border-bottom: none;
  }
`;

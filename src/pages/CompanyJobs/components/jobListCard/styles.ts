import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.two};
  border-radius: 4px;
  width: 100%;
  max-width: 50rem;
  margin-right: 3rem;
  margin-bottom: 3rem;
  background-color: ${({ theme }) => theme.colors.four};
  flex-direction: column;

  cursor: pointer;
  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }

  :active {
    filter: brightness(85%);
  }
`;

export const Header = styled.div`
  padding: 1rem;
`;

export const Footer = styled.div`
  padding: 1rem;
  display: flex;
`;

export const FooterLeftColumn = styled.div`
  width: 50%;
`;

export const FooterRightColumn = styled.div`
  width: 50%;
`;

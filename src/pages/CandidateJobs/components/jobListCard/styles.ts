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
  display: flex;
`;

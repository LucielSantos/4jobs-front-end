import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.four};
  border-radius: 8px;
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.two};
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  box-sizing: border-box;
`;

export const Body = styled.div`
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
`;

export const CloseIconContainer = styled.div`
  margin: 0 -0.5rem 0 auto;
  display: flex;
  align-items: center;
`;

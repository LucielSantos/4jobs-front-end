import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.four};
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CloseIconContainer = styled.div`
  margin-left: auto;
`;

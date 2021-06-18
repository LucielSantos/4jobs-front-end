import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: 4px;
  display: flex;
`;

export const MessageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.four};
  padding: 1.5rem;
  width: 100%;
  border-radius: 4px;
`;

export const MessageInfo = styled.p`
  color: ${({ theme }) => theme.colors.five};
  font-weight: 600;

  & span {
    color: ${({ theme }) => theme.colors.six};
    font-weight: normal;
    font-size: 12px;
  }
`;

export const MessageBody = styled.div`
  margin-top: 1.5rem;
`;

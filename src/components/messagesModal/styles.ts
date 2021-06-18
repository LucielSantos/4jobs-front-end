import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const MessagesContainer = styled.div`
  width: 100%;
  max-height: 50rem;
  overflow: auto;
`;

export const MessageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.four};
  padding: 1.5rem;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 1.5rem;
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

import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
`;

interface IBody {
  isLoggedUser: boolean;
}

export const Body = styled.div<IBody>`
  width: 100%;
  padding: ${({ isLoggedUser }) => isLoggedUser && '2em 6rem'};
  box-sizing: border-box;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 6rem;
  background-color: ${({ theme }) => theme.colors.one};
  height: 100vh;
`;

interface IIconContainer {
  active: boolean;
}

export const IconContainer = styled.div<IIconContainer>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  box-sizing: border-box;
  transition: background-color 0.2s;
  background-color: ${({ active }) => active && 'rgba(255, 255, 255, 0.1)'};
`;

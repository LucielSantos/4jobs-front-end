import styled from 'styled-components';

export const Container = styled.div``;

interface IInputImageContainer {
  error?: boolean;
}

export const InputContainer = styled.div<IInputImageContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 2px solid
    ${({ theme, error = false }) => (error ? theme.colors.seven : theme.colors.three)};
  cursor: pointer;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
`;

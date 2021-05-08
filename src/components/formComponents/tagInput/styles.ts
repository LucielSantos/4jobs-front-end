import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const FormContainer = styled.div`
  display: flex;
  max-width: 30rem;
`;

export const AddButton = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.two};
  border-radius: 4px;
  margin-left: 1rem;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(80%);
  }
`;

interface ITagsContainer {
  isRequired?: boolean;
}

export const TagsContainer = styled.div<ITagsContainer>`
  display: flex;
  flex-wrap: wrap;
  height: ${({ isRequired }) => isRequired && '3.6rem'};
`;

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.two};
  color: ${({ theme }) => theme.typography.colors.two};
  border-radius: 4px;
  padding: 0.3rem 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

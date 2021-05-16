import styled from 'styled-components';

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.two};
  color: ${({ theme }) => theme.typography.colors.two};
  border-radius: 4px;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

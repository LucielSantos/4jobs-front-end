import styled from 'styled-components';
import { maxWidthMobile } from '../../constants';

export interface IContainer {
  margin?: string;
}

export const Container = styled.div<IContainer>`
  padding: 2rem;
  border-radius: 8px;
  margin: ${({ margin }) => margin || 0};
  background-color: ${({ theme }) => theme.colors.four};

  @media (max-width: ${maxWidthMobile}) {
    margin: ${({ margin }) => margin || 0};
  }
`;

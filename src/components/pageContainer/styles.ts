import styled from 'styled-components';
import { maxWidthMobile } from '../../constants';

export const Container = styled.div`
  margin: 4rem 10rem;

  @media (max-width: ${maxWidthMobile}) {
    margin: 2rem 2rem;
  }
`;

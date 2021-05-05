import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const StyledInput = styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: white !important;
  }
`;

interface IInputContainer {
  marginLeft?: boolean;
  marginRight?: boolean;
}

export const Container = styled.div<IInputContainer>`
  display: flex;
  flex-direction: column;
  position: relative;

  margin-left: ${({ marginLeft = false }) => marginLeft && '2rem'};
  margin-right: ${({ marginRight = false }) => marginRight && '2rem'};
`;

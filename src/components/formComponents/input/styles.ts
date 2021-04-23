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
  width: 100%;
  flex-direction: column;

  margin-left: ${({ marginLeft = false }) => marginLeft && '2rem'};
  margin-right: ${({ marginRight = false }) => marginRight && '2rem'};
`;

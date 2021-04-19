import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const StyledInput = styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: white !important;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

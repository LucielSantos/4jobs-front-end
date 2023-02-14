import styled from 'styled-components';
import { Typography, ITypography } from '../';

export interface ILabel extends ITypography {}

export const Label = styled(Typography).attrs<ILabel>(({ color = 'three', size = 'sm' }) => ({
  color,
}))<ILabel>`
  margin-bottom: 1rem;
`;

import styled, { DefaultTheme } from 'styled-components';

type TColor = keyof DefaultTheme['typography']['colors'];
type TSize = keyof DefaultTheme['typography']['sizes'];
type TWeight = keyof DefaultTheme['typography']['weight'];

interface ITypography {
  color?: TColor;
  size?: TSize;
  weight?: TWeight;
}

export const Typography = styled.p<ITypography>`
  color: ${({ theme, color = 'one' }) => theme.typography.colors[color]};
  font-size: ${({ theme, size = 'md' }) => theme.typography.sizes[size]};
  font-weight: ${({ theme, weight = 'regular' }) =>
    theme.typography.weight[weight]};
`;

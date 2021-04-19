import styled, { DefaultTheme } from 'styled-components';

type TColor = keyof DefaultTheme['typography']['colors'];
type TSize = keyof DefaultTheme['typography']['sizes'];
type TWeight = keyof DefaultTheme['typography']['weight'];
type TMargin = keyof DefaultTheme['spacings'];

export interface ITypography {
  color?: TColor;
  size?: TSize;
  weight?: TWeight;
  marginTop?: TMargin;
  marginRight?: TMargin;
  marginBottom?: TMargin;
  marginLeft?: TMargin;
}

export const Typography = styled.p<ITypography>`
  color: ${({ theme, color = 'one' }) => theme.typography.colors[color]};
  font-size: ${({ theme, size = 'md' }) => theme.typography.sizes[size]};
  font-weight: ${({ theme, weight = 'regular' }) =>
    theme.typography.weight[weight]};
  margin-top: ${({ theme, marginTop }) =>
    marginTop ? theme.spacings[marginTop] : 0};
  margin-right: ${({ theme, marginRight }) =>
    marginRight ? theme.spacings[marginRight] : 0};
  margin-bottom: ${({ theme, marginBottom }) =>
    marginBottom ? theme.spacings[marginBottom] : 0};
  margin-left: ${({ theme, marginLeft }) =>
    marginLeft ? theme.spacings[marginLeft] : 0};
`;

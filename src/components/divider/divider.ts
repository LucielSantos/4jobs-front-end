import styled, { DefaultTheme } from 'styled-components';

interface IDivider {
  height?: string;
  margin?: string;
  color?: keyof DefaultTheme['colors'];
}

export const Divider = styled.div<IDivider>`
  height: ${({ height = '2px' }) => height};
  width: 100%;
  margin: ${({ margin = '0' }) => margin};
  background-color: ${({ theme, color }) => (color ? theme.colors[color] : 'transparent')};
`;

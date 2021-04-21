import styled, { css, DefaultTheme } from 'styled-components';

import { IoIosClose as Close } from 'react-icons/io';
import { IconType } from 'react-icons/lib';

type TColor = keyof DefaultTheme['colors'];
type TSizes = keyof DefaultTheme['icon']['sizes'];
type TMargin = keyof DefaultTheme['spacings'];

export interface IIcon {
  color?: TColor;
  sizeParam?: TSizes;
  clickable?: boolean;
  marginTop?: TMargin;
  marginRight?: TMargin;
  marginBottom?: TMargin;
  marginLeft?: TMargin;
}

const addIconStyle = (icon: IconType) => styled(icon)<IIcon>`
  color: ${({ theme, color = 'one' }) => theme.colors[color]};
  font-size: ${({ theme, sizeParam = 'md' }) => theme.icon.sizes[sizeParam]};
  margin-top: ${({ theme, marginTop }) =>
    marginTop ? theme.spacings[marginTop] : 0};
  margin-right: ${({ theme, marginRight }) =>
    marginRight ? theme.spacings[marginRight] : 0};
  margin-bottom: ${({ theme, marginBottom }) =>
    marginBottom ? theme.spacings[marginBottom] : 0};
  margin-left: ${({ theme, marginLeft }) =>
    marginLeft ? theme.spacings[marginLeft] : 0};

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(80%);
      }
      &:active {
        filter: brightness(70%);
      }
    `}
`;

export const icons = {
  close: addIconStyle(Close),
};

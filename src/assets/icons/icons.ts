import styled, { css, DefaultTheme } from 'styled-components';

import { IoIosClose as Close } from 'react-icons/io';
import { MdArrowBack as ArrowBack } from 'react-icons/md';
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
  isButton?: boolean;
}

const addIconStyle = (icon: IconType) => styled(icon)<IIcon>`
  color: ${({ theme, color = 'one' }) => theme.colors[color]};
  font-size: ${({ theme, sizeParam = 'md' }) => theme.icon.sizes[sizeParam]};
  margin-top: ${({ theme, marginTop }) => (marginTop ? theme.spacings[marginTop] : 0)};
  margin-right: ${({ theme, marginRight }) =>
    marginRight ? theme.spacings[marginRight] : 0};
  margin-bottom: ${({ theme, marginBottom }) =>
    marginBottom ? theme.spacings[marginBottom] : 0};
  margin-left: ${({ theme, marginLeft }) =>
    marginLeft ? theme.spacings[marginLeft] : 0};

  ${({ clickable, isButton }) =>
    clickable &&
    css`
      cursor: pointer;
      transition: filter, background-color 0.2s;
      ${
        isButton &&
        css`
          border-radius: 50%;
        `
      }}
        
      &:hover {
        filter: brightness(80%);
        ${
          isButton &&
          css`
            background-color: rgba(100, 100, 100, 0.08);
          `
        }}
      }
      &:active {
        filter: brightness(70%);
        ${
          isButton &&
          css`
            background-color: rgba(100, 100, 100, 0.2);
          `
        }}
      }
    `}
`;

export const icons = {
  close: addIconStyle(Close),
  arrowBack: addIconStyle(ArrowBack),
};

import styled, { css, DefaultTheme } from 'styled-components';

import { IoIosClose as Close } from 'react-icons/io';
import { IconType } from 'react-icons/lib';

type TColor = keyof DefaultTheme['colors'];
type TSizes = keyof DefaultTheme['icon']['sizes'];

export interface IIcon {
  color?: TColor;
  sizeParam?: TSizes;
  clickable?: boolean;
}

const addIconStyle = (icon: IconType) => styled(icon)<IIcon>`
  color: ${({ theme, color = 'one' }) => theme.colors[color]};
  font-size: ${({ theme, sizeParam = 'md' }) => theme.icon.sizes[sizeParam]};

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(90%);
      }
      &:active {
        filter: brightness(80%);
      }
    `}
`;

export const icons = {
  close: addIconStyle(Close),
};

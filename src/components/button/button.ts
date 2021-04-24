import styled, { css, DefaultTheme } from 'styled-components';
import { maxWidthMobile } from '../../constants';

type TVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
type TMargin = keyof DefaultTheme['spacings'];

interface IButton {
  type?: HTMLButtonElement['type'];
  variant?: TVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  fullWidthOnMobile?: boolean;
  marginTop?: TMargin;
  marginRight?: TMargin;
  marginBottom?: TMargin;
  marginLeft?: TMargin;
}

export const Button = styled.button.attrs<IButton>(({ type }) => ({
  type: type || 'button',
}))<IButton>`
  font-size: ${({ theme }) => theme.typography.sizes.md};
  min-width: 20rem;
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  transition: filter 0.3s;
  font-weight: 400;
  cursor: ${({ disabled = false }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${({ theme, marginTop }) => (marginTop ? theme.spacings[marginTop] : 0)};
  margin-right: ${({ theme, marginRight }) =>
    marginRight ? theme.spacings[marginRight] : 0};
  margin-bottom: ${({ theme, marginBottom }) =>
    marginBottom ? theme.spacings[marginBottom] : 0};
  margin-left: ${({ theme, marginLeft }) =>
    marginLeft ? theme.spacings[marginLeft] : 0};

  ${({ fullWidth = false }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  background-color: ${({ theme, variant = 'primary', disabled = false }) =>
    disabled
      ? theme.buttons[variant].disabled.background
      : theme.buttons[variant].background};
  color: ${({ theme, variant = 'primary', disabled = false }) =>
    disabled ? theme.buttons[variant].disabled.color : theme.buttons[variant].color};

  &:hover {
    filter: ${({ disabled = false, variant }) =>
      !disabled && variant === 'tertiary' ? 'brightness(95%)' : 'brightness(90%)'};
  }
  &:active {
    filter: ${({ disabled = false, variant }) =>
      !disabled && variant === 'tertiary' ? 'brightness(90%)' : 'brightness(80%)'};
  }

  ${({ disabled = false }) =>
    disabled &&
    css`
      pointer-events: none;
    `}

  @media(max-width: ${maxWidthMobile}) {
    ${({ fullWidthOnMobile = false }) =>
      fullWidthOnMobile &&
      css`
        width: 100%;
      `}
  }
`;

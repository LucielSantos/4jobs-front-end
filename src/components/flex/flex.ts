import styled, { DefaultTheme } from 'styled-components';

type TFlexAlignItems =
  | 'normal'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

type TFlexJustifyContent =
  | 'normal'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type TFlexFlexDirection = 'row' | 'column';

type TFlexFlexWrap = 'wrap' | 'nowrap';

type TMargin = keyof DefaultTheme['spacings'];

interface IFlex {
  alignItems?: TFlexAlignItems;
  justifyItems?: TFlexJustifyContent;
  flexDirection?: TFlexFlexDirection;
  marginTop?: TMargin;
  marginRight?: TMargin;
  marginBottom?: TMargin;
  marginLeft?: TMargin;
  flexWrap?: TFlexFlexWrap;
  /** Default value is "auto" */
  notFullWidth?: boolean;
}

export const Flex = styled.div<IFlex>`
  display: flex;

  width: ${({ notFullWidth = false }) => (notFullWidth ? 'auto' : '100%')};

  flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
  align-items: ${({ alignItems = 'normal' }) => alignItems};
  justify-content: ${({ justifyItems = 'normal' }) => justifyItems};
  flex-wrap: ${({ flexWrap = 'nowrap' }) => flexWrap};

  margin-top: ${({ theme, marginTop }) => (marginTop ? theme.spacings[marginTop] : 0)};
  margin-right: ${({ theme, marginRight }) =>
    marginRight ? theme.spacings[marginRight] : 0};
  margin-bottom: ${({ theme, marginBottom }) =>
    marginBottom ? theme.spacings[marginBottom] : 0};
  margin-left: ${({ theme, marginLeft }) =>
    marginLeft ? theme.spacings[marginLeft] : 0};
`;

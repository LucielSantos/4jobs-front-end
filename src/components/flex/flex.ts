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

type TBackgroundColor = keyof DefaultTheme['colors'];

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
  /** Default value is "transparent" */
  backgroundColor?: TBackgroundColor;
  borderRadius?: string;
  padding?: string;
}

export const Flex = styled.div<IFlex>`
  display: flex;

  width: ${({ notFullWidth = false }) => (notFullWidth ? 'auto' : '100%')};

  flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
  align-items: ${({ alignItems = 'normal' }) => alignItems};
  justify-content: ${({ justifyItems = 'normal' }) => justifyItems};
  flex-wrap: ${({ flexWrap = 'nowrap' }) => flexWrap};

  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor] : 'transparent'};
  flex-wrap: ${({ flexWrap = 'nowrap' }) => flexWrap};

  border-radius: ${({ borderRadius }) => borderRadius || 0};

  padding: ${({ padding }) => padding || 0};
  box-sizing: border-box;

  margin-top: ${({ theme, marginTop }) => (marginTop ? theme.spacings[marginTop] : 0)};
  margin-right: ${({ theme, marginRight }) =>
    marginRight ? theme.spacings[marginRight] : 0};
  margin-bottom: ${({ theme, marginBottom }) =>
    marginBottom ? theme.spacings[marginBottom] : 0};
  margin-left: ${({ theme, marginLeft }) =>
    marginLeft ? theme.spacings[marginLeft] : 0};
`;

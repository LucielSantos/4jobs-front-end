import styled from 'styled-components';

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

interface IFlex {
  alignItems?: TFlexAlignItems;
  justifyItems?: TFlexJustifyContent;
  flexDirection?: TFlexFlexDirection;
}

export const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
  align-items: ${({ alignItems = 'normal' }) => alignItems};
  justify-content: ${({ justifyItems = 'normal' }) => justifyItems};
  width: 100%;
`;

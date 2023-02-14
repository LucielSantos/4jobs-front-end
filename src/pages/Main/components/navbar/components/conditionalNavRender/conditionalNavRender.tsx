import React from 'react';
import { JsxElement } from 'typescript';
import { navbarStates, TNavbarStatesKeys } from '../../../../../../constants';

interface IProps {
  navbarState: number;
  showIn?: TNavbarStatesKeys[];
  children?: React.ReactElement | React.ReactElement[] | null | JsxElement;
}

const ConditionalNavRenderComponent: React.FC<IProps> = ({
  navbarState,
  showIn,
  children,
}) => {
  if (!showIn) return <> {children} </>;

  if (showIn.find((showInState) => navbarStates[showInState] === navbarState))
    return <> {children} </>;

  return null;
};

export const ConditionalNavRender = React.memo(ConditionalNavRenderComponent);

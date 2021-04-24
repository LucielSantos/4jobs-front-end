import React from 'react';

import { InputAdornment, InputProps } from '@material-ui/core';
import { IInputProps, TAdornmentProp } from './input';

const renderAdornmentInputProp = (
  position: 'start' | 'end',
  adornment?: TAdornmentProp
):
  | Partial<InputProps>['startAdornment']
  | Partial<InputProps>['endAdornment']
  | false
  | React.Component => {
  if (!adornment) {
    return false;
  }

  return <InputAdornment position={position}>{adornment}</InputAdornment>;
};

const renderMaskInputProp = (
  maskComponent?: IInputProps['maskComponent'],
  mask?: IInputProps['mask']
): {
  inputComponent: Partial<InputProps>['inputComponent'];
  inputProps: Partial<InputProps>['inputProps'];
} | void =>
  maskComponent && {
    inputComponent: maskComponent,
    inputProps: {
      mask,
    },
  };

export const renderInputProps = (
  startAdornment?: TAdornmentProp,
  endAdornment?: TAdornmentProp,
  maskComponent?: IInputProps['maskComponent'],
  mask?: IInputProps['mask']
): Partial<InputProps> => {
  const obj: Partial<InputProps> = {
    startAdornment: renderAdornmentInputProp('start', startAdornment),
    endAdornment: renderAdornmentInputProp('end', endAdornment),
  };

  if (maskComponent) {
    return {
      ...obj,
      ...renderMaskInputProp(maskComponent, mask),
    };
  }

  return obj;
};

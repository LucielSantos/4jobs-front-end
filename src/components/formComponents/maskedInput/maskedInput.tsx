import React from 'react';
import MaskedInputLib from 'react-text-mask';
import { masksInput } from '../../../constants';

import { IInputProps, Input } from '../input';

export type TMaskProp = keyof typeof masksInput;

interface IProps extends IInputProps {
  mask?: TMaskProp;
}

export interface ITextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
  mask: TMaskProp;
}

function TextMaskCustom({ inputRef, mask, ...props }: ITextMaskCustomProps) {
  return (
    <MaskedInputLib
      {...props}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={masksInput[mask]}
      showMask={false}
      guide={false}
    />
  );
}

const MaskedInputComponent: React.FC<IProps> = ({ ...props }) => {
  return <Input maskComponent={TextMaskCustom} {...props} />;
};

export const MaskedInput = React.memo(MaskedInputComponent);

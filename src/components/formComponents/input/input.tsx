import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import { Label } from '../../label';
import { ITypography } from '../../typography';
import { ErrorMessage } from '../';
import { TMaskProp } from '../maskedInput';

import { StyledInput, Container } from './styles';

export interface IInputProps {
  separatedLabel?: boolean;
  label?: string | React.Component;
  labelColor?: ITypography['color'];
  placeholder?: string;
  name: string;
  notErrorMargin?: boolean;
  marginLeft?: boolean;
  marginRight?: boolean;
  maskComponent?: any;
  mask?: TMaskProp;
}

const InputComponent: React.FC<IInputProps> = ({
  label,
  placeholder,
  labelColor = 'three',
  separatedLabel = false,
  notErrorMargin = false,
  marginLeft = false,
  marginRight = false,
  maskComponent,
  name,
  mask = 'number',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container marginLeft={marginLeft} marginRight={marginRight}>
      {separatedLabel && label && <Label color={labelColor}>{label}</Label>}

      <StyledInput
        label={separatedLabel ? false : label}
        variant="outlined"
        size="small"
        fullWidth
        placeholder={placeholder}
        defaultValue={defaultValue}
        inputRef={inputRef}
        error={Boolean(error)}
        InputProps={
          maskComponent && {
            inputComponent: maskComponent,
            inputProps: {
              mask,
            },
          }
        }
        onChange={e => {
          error && clearError();
        }}
      />

      {notErrorMargin ? (
        error && <ErrorMessage>{error && error}</ErrorMessage>
      ) : (
        <ErrorMessage>{error || ' '}</ErrorMessage>
      )}
    </Container>
  );
};

export const Input = React.memo(InputComponent);

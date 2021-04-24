import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import { Label } from '../../label';
import { ITypography } from '../../typography';
import { ErrorMessage } from '../';
import { TMaskProp } from '../maskedInput';

import { StyledInput, Container } from './styles';
import { renderInputProps } from './_utils';
import { TextFieldProps } from '@material-ui/core';

export type TAdornmentProp = any;

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
  type?: HTMLInputElement['type'];
  startAdornment?: TAdornmentProp;
  endAdornment?: TAdornmentProp;
  multiline?: TextFieldProps['multiline'];
  rowsMax?: TextFieldProps['rowsMax'];
  rows?: TextFieldProps['rows'];
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
  type = 'text',
  startAdornment,
  endAdornment,
  ...props
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
        {...props}
        label={separatedLabel ? false : label}
        variant="outlined"
        size="small"
        fullWidth
        placeholder={placeholder}
        defaultValue={defaultValue}
        inputRef={inputRef}
        error={Boolean(error)}
        type={type}
        InputProps={renderInputProps(startAdornment, endAdornment, maskComponent, mask)}
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

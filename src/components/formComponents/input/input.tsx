import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import { Label } from '../../label';
import { ITypography } from '../../typography';
import { ErrorMessage } from '../';

import { StyledInput, Container } from './styles';

interface Props {
  separatedLabel?: boolean;
  label?: string | React.Component;
  labelColor?: ITypography['color'];
  placeholder?: string;
  name: string;
  notErrorMargin?: boolean;
}

const InputComponent: React.FC<Props> = ({
  label,
  placeholder,
  labelColor = 'three',
  separatedLabel = false,
  notErrorMargin = false,
  name,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

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
    <Container>
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

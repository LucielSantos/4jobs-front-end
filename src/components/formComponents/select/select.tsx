import { MenuItem, TextFieldProps } from '@material-ui/core';
import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import { Label, ITypography, ErrorMessage } from '../../';
import { StyledInput, Container } from '../input/styles';

type TOption = {
  [key: string]: any;
};

interface ISelectProps {
  name: string;
  label?: string;
  options: TOption[];
  labelOption?: string;
  valueOption?: string;
  separatedLabel?: boolean;
  labelColor?: ITypography['color'];
  placeholder?: string;
  notErrorMargin?: boolean;
  marginLeft?: boolean;
  marginRight?: boolean;
  floatingError?: boolean;
  onChange?: TextFieldProps['onChange'];
  value?: HTMLInputElement['value'];
}

const SelectComponent: React.FC<ISelectProps> = ({
  name,
  options,
  labelOption = 'label',
  valueOption = 'value',
  label,
  placeholder,
  labelColor = 'three',
  separatedLabel = false,
  notErrorMargin = false,
  marginLeft = false,
  marginRight = false,
  floatingError = false,
  onChange,
  value = false,
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
        select
        SelectProps={{
          MenuProps: {
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
          },
        }}
        value={value || null}
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
          onChange && onChange(e);
        }}
      >
        {options.map(option => (
          <MenuItem dense value={option[valueOption]} key={option[valueOption]}>
            {option[labelOption]}
          </MenuItem>
        ))}
      </StyledInput>

      {notErrorMargin ? (
        error && (
          <ErrorMessage floatingError={floatingError}>{error && error}</ErrorMessage>
        )
      ) : (
        <ErrorMessage floatingError={floatingError}>{error || ' '}</ErrorMessage>
      )}
    </Container>
  );
};

export const Select = React.memo(SelectComponent);

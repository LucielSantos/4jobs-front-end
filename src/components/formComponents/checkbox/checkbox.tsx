import { Checkbox as MUICheckbox, CheckboxProps } from '@material-ui/core';
import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import { Flex } from '../../';
import { Typography } from '../../typography';
import { ErrorMessage } from '../errorMessage';

interface IProps {
  label: string;
  name: string;
  notErrorMargin?: boolean;
  floatingError?: boolean;
  onChange?: CheckboxProps['onChange'];
  checked?: CheckboxProps['checked'];
}

const CheckboxComponent: React.FC<IProps> = ({
  label,
  name,
  floatingError = false,
  notErrorMargin = false,
  onChange,
  checked,
}) => {
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: () => inputRef.current?.checked,
    });
  }, [fieldName, registerField]);

  return (
    <Flex flexDirection="column">
      <Flex alignItems="center">
        <MUICheckbox
          checked={checked === undefined ? undefined : checked}
          defaultChecked={!!defaultValue}
          inputRef={inputRef}
          color="primary"
          edge="start"
          onChange={(...props) => {
            error && clearError();
            onChange && onChange(...props);
          }}
        />

        <Typography size="sm">{label}</Typography>
      </Flex>

      {notErrorMargin ? (
        error && <ErrorMessage floatingError={floatingError}>{error && error}</ErrorMessage>
      ) : (
        <ErrorMessage floatingError={floatingError}>{error || ' '}</ErrorMessage>
      )}
    </Flex>
  );
};

export const Checkbox = React.memo(CheckboxComponent);

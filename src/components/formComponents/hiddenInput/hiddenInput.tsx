import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

interface IProps {
  name: string;
  value: any;
}

const HiddenInputComponent: React.FC<IProps> = ({ name, value }) => {
  const { fieldName, registerField } = useField(name);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: () => value,
    });
  }, [fieldName, registerField, value]);
  return null;
};

export const HiddenInput = React.memo(HiddenInputComponent);

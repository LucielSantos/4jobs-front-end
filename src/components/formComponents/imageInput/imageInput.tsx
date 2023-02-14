import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '../../../assets/icons';
import { toBase64 } from '../../../utils';
import { ErrorMessage } from '../';

import { InputContainer, Container, Image } from './styles';

interface IProps {
  name: string;
  notErrorMargin?: boolean;
}

const ImageInputComponent: React.FC<IProps> = ({
  name,
  notErrorMargin = false,
}) => {
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);

  const [value, setValue] = useState<string>(defaultValue || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: () => value,
      setValue: (ref, newValue) => {
        setValue(newValue);
      },
      clearValue: () => {
        setValue('');
      },
    });
  }, [fieldName, registerField, value]);

  const onClickInput = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const onChangeImage = useCallback(
    async (e) => {
      try {
        error && clearError();

        const file = e.target.files[0];

        const base64 = await toBase64(file);

        setValue(base64);
      } catch (error) {
        console.error(error);
      }
    },
    [error, clearError]
  );

  return (
    <Container>
      <InputContainer onClick={onClickInput} error={Boolean(error)}>
        {value ? (
          <Image src={value} alt="value" />
        ) : (
          <Icon name="camera" size="sm" color={error ? 'seven' : 'three'} />
        )}
      </InputContainer>

      {notErrorMargin ? (
        error && <ErrorMessage>{error && error}</ErrorMessage>
      ) : (
        <ErrorMessage>{error || ' '}</ErrorMessage>
      )}

      <input
        style={{ display: 'none' }}
        type="file"
        accept="image/*"
        max="1"
        ref={inputRef}
        onChange={onChangeImage}
      />
    </Container>
  );
};

export const ImageInput = React.memo(ImageInputComponent);

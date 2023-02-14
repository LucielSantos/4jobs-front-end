import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles, SubmitHandler, useField } from '@unform/core';
import * as Yup from 'yup';

import { requiredMessage } from '../../../validationSchemas/messages';
import { Form, Flex, Input, ErrorMessage } from '../../';
import { Icon } from '../../../assets/icons';

import { Container, FormContainer, AddButton, TagsContainer, Tag } from './styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
});

interface IProps {
  label?: string;
  name: string;
  notErrorMargin?: boolean;
  floatingError?: boolean;
  isRequired?: boolean;
}

const TagInputComponent: React.FC<IProps> = ({
  name,
  label,
  notErrorMargin = false,
  floatingError = false,
  isRequired = false,
}) => {
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name);

  const [values, setValues] = useState<string[]>(defaultValue || []);
  const formRef = useRef<FormHandles>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: () => values,
      setValue: (ref, newValue) => {
        setValues(newValue);
      },
      clearValue: () => {
        setValues([]);
      },
    });
  }, [fieldName, registerField, values]);

  const addValue = useCallback(
    (addedValue: string) => setValues(oldValues => [...oldValues, addedValue]),
    []
  );

  const onClickRemove = useCallback(
    (removedIndex: number) => {
      error && clearError();
      setValues(oldValues => oldValues.filter((name, index) => index !== removedIndex));
    },
    [error, clearError]
  );

  const handleSubmit = useCallback<SubmitHandler>(
    (data: { name: string }, { reset }) => {
      error && clearError();
      addValue(data.name);
      reset();
    },
    [addValue, error, clearError]
  );

  const onClickAdd = useCallback(() => formRef.current?.submitForm(), []);

  return (
    <Container>
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit} validationSchema={validationSchema}>
          <Flex>
            <Input name="name" label={label} />

            <AddButton onClick={onClickAdd}>
              <Icon name="add" color="four" size="sm" />
            </AddButton>
          </Flex>
        </Form>
      </FormContainer>

      <TagsContainer isRequired={isRequired}>
        {values.map((name, index) => (
          <Tag key={`${name}-${index}`}>
            {name}

            <Icon
              name="close"
              color="four"
              size="sm"
              clickable
              marginLeft="xs"
              isButton
              onClick={() => onClickRemove(index)}
            />
          </Tag>
        ))}
      </TagsContainer>

      {notErrorMargin ? (
        error && <ErrorMessage floatingError={floatingError}>{error && error}</ErrorMessage>
      ) : (
        <ErrorMessage floatingError={floatingError}>{error || ' '}</ErrorMessage>
      )}

      <input type="hidden" ref={inputRef} />
    </Container>
  );
};

export const TagInput = React.memo(TagInputComponent);

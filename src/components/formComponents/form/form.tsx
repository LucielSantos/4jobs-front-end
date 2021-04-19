import { FormHandles, SubmitHandler } from '@unform/core';
import React, { useRef } from 'react';
import { Form as FormUnform } from '@unform/web';
import * as Yup from 'yup';

interface IProps {
  children: React.ReactElement | React.ReactElement[];
  validationSchema?: any;
  onSubmit: SubmitHandler;
  schemaParams?: any;
}

interface IErrorMessages {
  [key: string]: any;
}

const FormComponent: React.FC<IProps> = ({
  children,
  validationSchema,
  onSubmit,
  schemaParams,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler = async (data, { reset }) => {
    try {
      const validateData = data;

      if (validationSchema) {
        await validationSchema.validate(validateData, {
          abortEarly: false,
          context: validateData,
          schemaParams,
        });
      }

      formRef.current?.setErrors({});

      onSubmit(validateData, { reset });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages: IErrorMessages = {};

        err.inner.forEach(error => {
          if (error.path) {
            errorMessages[error.path] = error.message;
          }
        });

        formRef.current && formRef.current.setErrors(errorMessages);
      }
    }
  };

  return (
    <FormUnform ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
      {children}
    </FormUnform>
  );
};

export const Form = React.memo(FormComponent);

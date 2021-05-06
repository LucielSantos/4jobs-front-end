import { FormHandles, SubmitHandler } from '@unform/core';
import React, { RefForwardingComponent, useImperativeHandle, useRef } from 'react';
import { Form as FormUnform } from '@unform/web';
import * as Yup from 'yup';

interface IProps {
  children: React.ReactElement | React.ReactElement[] | React.ReactNode;
  validationSchema?: any;
  onSubmit: SubmitHandler;
  schemaParams?: any;
  initialData?: Record<string, any>;
}

interface IErrorMessages {
  [key: string]: any;
}

const FormComponent: RefForwardingComponent<FormHandles | null, IProps> = (
  { children, validationSchema, onSubmit, schemaParams, initialData },
  ref
) => {
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

  useImperativeHandle(ref, () => formRef.current as FormHandles);

  return (
    <FormUnform
      ref={formRef}
      initialData={initialData}
      onSubmit={handleSubmit}
      style={{ width: '100%' }}
    >
      {children}
    </FormUnform>
  );
};

FormComponent.displayName = 'Form';

export const Form = React.forwardRef(FormComponent);

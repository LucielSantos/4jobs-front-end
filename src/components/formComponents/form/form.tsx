import { FormHandles, SubmitHandler } from '@unform/core';
import React, { useRef } from 'react';
import { Form as FormUnform } from '@unform/web';

interface IProps {
  children: React.ReactElement | React.ReactElement[];
  validationSchema?: any;
  onSubmit: SubmitHandler;
  schemaParams?: any;
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

      onSubmit(validateData, { reset });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormUnform ref={formRef} onSubmit={handleSubmit}>
      {children}
    </FormUnform>
  );
};

export const Form = React.memo(FormComponent);

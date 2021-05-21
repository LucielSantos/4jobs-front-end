import { Scope } from '@unform/core';
import React from 'react';
import { IDynamicFormField } from '../../../store/ducks/createJob/types';
import { renderField } from './_utils';

interface IProps {
  fields: IDynamicFormField[];
  path: string;
}

const DynamicFormComponent: React.FC<IProps> = ({ fields, path }) => {
  return (
    <>
      {fields.map((field, index) => (
        <Scope key={`dynamicFormField-${index}`} path={`${path}[${index}]`}>
          {renderField(field)}
        </Scope>
      ))}
    </>
  );
};

export const DynamicForm = React.memo(DynamicFormComponent);

import { Scope } from '@unform/core';
import React from 'react';
import { IDynamicFormField } from '../../../store/ducks/createJob/types';
import { HiddenInput } from '../hiddenInput';
import { renderField } from './_utils';

interface IProps {
  fields: IDynamicFormField[];
  path: string;
  fieldsName: string;
}

const DynamicFormComponent: React.FC<IProps> = ({
  fields,
  path,
  fieldsName,
}) => {
  return (
    <>
      {fields.map((field, index) => (
        <Scope key={`dynamicFormField-${index}`} path={`${path}[${index}]`}>
          {renderField(field, fieldsName)}

          <HiddenInput name="title" value={field.title} />
        </Scope>
      ))}
    </>
  );
};

export const DynamicForm = React.memo(DynamicFormComponent);

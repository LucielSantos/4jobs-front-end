import React from 'react';

import { dynamicFormFieldValues } from '../../../constants';
import { IDynamicFormField } from '../../../store/ducks/createJob/types';
import { Input } from '../';
import { MaskedInput } from '../maskedInput';
import { DateInput } from '../dateInput';

const renderLabel = (field: IDynamicFormField) => `${field.title}${field.required ? ' *' : ''}`;

export const renderField = (field: IDynamicFormField, name: string) => {
  switch (field.type) {
    case dynamicFormFieldValues.text:
      return <Input name={name} label={renderLabel(field)} />;

    case dynamicFormFieldValues.url:
      return <Input name={name} label={renderLabel(field)} />;

    case dynamicFormFieldValues.textArea:
      return <Input name={name} label={renderLabel(field)} multiline rows={4} />;

    case dynamicFormFieldValues.date:
      return <DateInput name={name} label={renderLabel(field)} />;

    case dynamicFormFieldValues.integer:
      return <MaskedInput mask="number" name={name} label={renderLabel(field)} />;

    case dynamicFormFieldValues.decimal:
      return <MaskedInput mask="decimal" name={name} label={renderLabel(field)} />;

    default:
      return null;
    // TODO: uncomment
    // throw new Error(`The field type "${field.type}" does not exists`);
  }
};

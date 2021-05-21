import React from 'react';

import { dynamicFormFieldValues } from '../../../constants';
import { IDynamicFormField } from '../../../store/ducks/createJob/types';
import { Input } from '../';
import { MaskedInput } from '../maskedInput';
import { DateInput } from '../dateInput';

export const renderField = (field: IDynamicFormField) => {
  switch (field.type) {
    case dynamicFormFieldValues.text:
      return <Input name="response" label={field.title} />;

    case dynamicFormFieldValues.url:
      return <Input name="response" label={field.title} />;

    case dynamicFormFieldValues.textArea:
      return <Input name="response" label={field.title} multiline rows={4} />;

    case dynamicFormFieldValues.date:
      return <DateInput name="response" label={field.title} />;

    case dynamicFormFieldValues.integer:
      return <MaskedInput mask="number" name="response" label={field.title} />;

    case dynamicFormFieldValues.decimal:
      return <MaskedInput mask="decimal" name="response" label={field.title} />;

    default:
      return null;
    // TODO: uncomment
    // throw new Error(`The field type "${field.type}" does not exists`);
  }
};

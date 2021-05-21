import * as Yup from 'yup';
import { IDynamicFormField } from '../store/ducks/createJob/types';
import { requiredMessage } from './messages';

function validate(value: string | undefined, context: any) {
  const fields = context.options.schemaParams.fields as IDynamicFormField[];
  const index = context.options.index as number;

  if (fields[index].required) {
    return Boolean(value);
  }

  return true;
}

export const candidateReplyDynamicFormValidationSchema = Yup.object().shape({
  fields: Yup.array().of(
    Yup.object().shape({
      response: Yup.string().test('test-field', requiredMessage, validate),
    })
  ),
});

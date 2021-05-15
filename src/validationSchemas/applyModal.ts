import * as Yup from 'yup';
import { requiredMessage, invalidFormat } from './messages';
import { validateGuid } from './_utils';

export const applyJobModalValidationSchema = Yup.object().shape({
  jobId: Yup.string()
    .test('validate-guid', invalidFormat, validateGuid)
    .required(requiredMessage),
});

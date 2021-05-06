import * as Yup from 'yup';
import { requiredMessage } from './messages';

export const createFormModalValidationSchema = Yup.object().shape({
  fields: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required(requiredMessage),
      type: Yup.string().required(requiredMessage),
    })
  ),
});

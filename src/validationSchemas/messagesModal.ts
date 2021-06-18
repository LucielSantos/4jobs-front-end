import * as Yup from 'yup';
import { requiredMessage } from './messages';

export const newMessageValidationSchema = Yup.object().shape({
  message: Yup.string().required(requiredMessage),
});

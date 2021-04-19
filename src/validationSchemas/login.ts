import * as Yup from 'yup';
import { requiredMessage } from './messages';

export const loginValidationSchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  password: Yup.string().required(requiredMessage),
});

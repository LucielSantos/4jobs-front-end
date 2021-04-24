import * as Yup from 'yup';
import { requiredMessage, mountMinChar } from './messages';

export const createCompanyValidationSchema = Yup.object().shape({
  image: Yup.string().required(requiredMessage),
  name: Yup.string().required(requiredMessage),
  responsibleName: Yup.string().required(requiredMessage),
  cnpj: Yup.string().min(18, mountMinChar(18)).required(requiredMessage),
  phone: Yup.string().required(requiredMessage),
  state: Yup.string().required(requiredMessage),
  city: Yup.string().required(requiredMessage),
  password: Yup.string().required(requiredMessage),
  confirmPassword: Yup.string().required(requiredMessage),
  description: Yup.string().required(requiredMessage),
});

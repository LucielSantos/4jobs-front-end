import * as Yup from 'yup';
import { passwordMatches } from './constants';
import {
  invalidEmail,
  invalidPassword,
  matchPasswordError,
  requiredMessage,
} from './messages';

export const createCandidateValidationSchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  email: Yup.string().email(invalidEmail).required(requiredMessage),
  password: Yup.string()
    .required(requiredMessage)
    .matches(passwordMatches, invalidPassword)
    .equals([Yup.ref('confirmPassword')], matchPasswordError),
  confirmPassword: Yup.string()
    .required(requiredMessage)
    .matches(passwordMatches, invalidPassword)
    .equals([Yup.ref('password')], matchPasswordError),
});

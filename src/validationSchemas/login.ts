import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  name: Yup.string(),
  password: Yup.string(),
});

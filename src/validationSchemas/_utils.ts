import { validate } from 'uuid';

export const validateGuid = (value: string | undefined) =>
  validate(value || '');

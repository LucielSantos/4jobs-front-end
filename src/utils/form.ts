import { FormHandles } from '@unform/core';
import { RefObject } from 'react';
import { IReturnGetErrorResponse } from '../services/config/getError';
/** This function return true if found form errors, if not, return false. */
export const setFormErrors = (
  formRef: RefObject<FormHandles>,
  error: IReturnGetErrorResponse
): boolean => {
  if (error.error && error.isFormError) {
    formRef.current?.setErrors(error.formErrors);

    return false;
  }

  return true;
};

import { FormHandles } from '@unform/core';
import { RefObject, useEffect } from 'react';
import { IReturnGetErrorResponse } from '../services/config/getError';
import { TErrorControlState } from '../store/ducks/types';
import { history, openNotification, setFormErrors } from '../utils';

export const useHandleRequestResponse = (
  error: TErrorControlState,
  errorResponse: IReturnGetErrorResponse,
  formRef: RefObject<FormHandles>,
  successMessage?: string
) => {
  useEffect(() => {
    console.log(errorResponse);

    if (error === 'error') setFormErrors(formRef, errorResponse);

    if (error === 'success') {
      successMessage && openNotification(successMessage);
      history.goBack();
    }
    // eslint-disable-next-line
  }, [error]);
};

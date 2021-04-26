import { AxiosError } from 'axios';
import { openNotification } from '../../utils';

export interface IApiErrorInterface {
  toastMessage?: string;
  formErrors?: any;
  isFormError?: boolean;
}

export interface IReturnGetErrorResponse extends IApiErrorInterface {
  isAxiosError: boolean;
}

export const getErrorResponse = (
  error: AxiosError<IApiErrorInterface>
): IReturnGetErrorResponse => {
  const genericMessage = 'Ocorreu um erro ao efetuar esta operação';

  const errorObj: IReturnGetErrorResponse = {
    ...error.response?.data,
    isAxiosError: error.isAxiosError,
  };

  if (error.isAxiosError) {
    const { response } = error;

    if (response?.data.toastMessage) {
      openNotification(response?.data.toastMessage, 'error');
    }

    if (response?.status === 500) {
      openNotification(genericMessage, 'error');

      return errorObj;
    }

    if (response?.status === 400) {
      return errorObj;
    }
  }

  openNotification(genericMessage, 'error');

  return errorObj;
};

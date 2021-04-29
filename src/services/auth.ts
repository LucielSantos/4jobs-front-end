import { AxiosResponse } from 'axios';
import { ILogin, ILoginSuccessData } from '../store/ducks/login/types';
import { api } from './api';
import { getErrorResponse } from './config/getError';

export const authenticateApi = async (
  data: ILogin
): Promise<AxiosResponse<ILoginSuccessData>> => {
  try {
    const response = await api.post('/authenticate', data);

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

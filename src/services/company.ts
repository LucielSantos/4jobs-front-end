import { AxiosResponse } from 'axios';
import { ICreateCompanyData } from '../store/ducks/createCompany/types';
import { api } from './api';
import { getErrorResponse } from './config/getError';

export const createCompanyApi = async (
  data: ICreateCompanyData
): Promise<AxiosResponse<ICreateCompanyData>> => {
  try {
    const response = await api.post('/company', data);

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

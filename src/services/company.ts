import { AxiosResponse } from 'axios';
import { ICreateCompanyData } from '../store/ducks/createCompany/types';
import { api } from './api';

export const createCompanyApi = async (
  data: ICreateCompanyData
): Promise<AxiosResponse<ICreateCompanyData>> => {
  try {
    const response = await api.post('/company', data);

    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
};

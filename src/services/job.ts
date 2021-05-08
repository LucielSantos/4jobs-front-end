import { AxiosResponse } from 'axios';
import { ICreateJob } from '../store/ducks/createJob/types';
import { api } from './api';
import { getErrorResponse } from './config/getError';

export const createJobApi = async (
  data: ICreateJob
): Promise<AxiosResponse<ICreateJob>> => {
  try {
    const response = await api.post('/job', data);

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

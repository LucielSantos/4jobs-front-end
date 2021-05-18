import { AxiosResponse } from 'axios';
import {} from '../store/ducks/login/types';
import { IJobCandidateList } from '../types';
import { api } from './api';
import { getErrorResponse } from './config/getError';

export const getCandidateJobs = async (): Promise<AxiosResponse<IJobCandidateList[]>> => {
  try {
    const response = await api.get('/jobsResponse');

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

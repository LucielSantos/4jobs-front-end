import { AxiosResponse } from 'axios';
import {} from '../store/ducks/login/types';
import { IJobCandidateList, ILinkJob } from '../types';
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

export const postApplyCandidateJob = async (
  data: ILinkJob
): Promise<AxiosResponse<IJobCandidateList>> => {
  try {
    const response = await api.post(`/jobsResponse/linkCandidateJob`, data);

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

import { AxiosResponse } from 'axios';
import { IJobInList } from '../store/ducks/companyJobs/types';
import { ICreateJob } from '../store/ducks/createJob/types';
import { IJobPreview } from '../types';
import { api } from './api';
import { getErrorResponse } from './config/getError';

export const createJobApi = async (
  data: ICreateJob
): Promise<AxiosResponse<ICreateJob>> => {
  try {
    const response = await api.post('/jobs', data);

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

export const getJobsApi = async (): Promise<AxiosResponse<IJobInList[]>> => {
  try {
    const response = await api.get('/jobs');

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

export const getJobPreview = async (
  jobId: string
): Promise<AxiosResponse<IJobPreview>> => {
  try {
    const response = await api.get(`/jobs/${jobId}/preview`);

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

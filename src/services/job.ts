import { AxiosResponse } from 'axios';
import { TJobStatus } from '../constants/job';
import { IJobInList } from '../store/ducks/companyJobs/types';
import { ICreateJob } from '../store/ducks/createJob/types';
import { IJobDetails, IJobPreview, IListCandidateByJob } from '../types';
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

export const getJobDetails = async (
  jobId: string
): Promise<AxiosResponse<IJobDetails>> => {
  try {
    const response = await api.get(`/jobs/${jobId}`);

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

export const getCandidatesByJob = async (
  jobId: string
): Promise<AxiosResponse<IListCandidateByJob>> => {
  try {
    const response = await api.get(`/jobs/${jobId}/candidates`);

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

export const patchChangeJobStatus = async (
  jobId: string,
  newStatus: TJobStatus
): Promise<AxiosResponse> => {
  try {
    const response = await api.patch(`/jobs/${jobId}/changeStatus`, {
      newStatus,
    });

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

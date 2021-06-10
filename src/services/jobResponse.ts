import { AxiosResponse } from 'axios';
import { TJobResponseValues } from '../constants';
import {} from '../store/ducks/login/types';
import {
  IJobCandidateDetails,
  IJobCandidateList,
  ILinkJob,
  IResponseFormJob,
} from '../types';
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

export const getCandidateJobDetails = async (
  jobId: string
): Promise<AxiosResponse<IJobCandidateDetails>> => {
  try {
    const response = await api.get(`/jobsResponse/${jobId}`);

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

export const putReplyForm = async (
  jobResponseId: string,
  data: {
    fields: IResponseFormJob[];
  }
): Promise<AxiosResponse<IJobCandidateDetails>> => {
  try {
    const response = await api.put(`/jobsResponse/replyForm/${jobResponseId}`, data);

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

export const patchChangeJobResponseStatus = async (
  jobResponseId: string,
  data: {
    newStatus: TJobResponseValues;
  }
): Promise<AxiosResponse> => {
  try {
    const response = await api.patch(`/jobsResponse/${jobResponseId}/changeStatus`, data);

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

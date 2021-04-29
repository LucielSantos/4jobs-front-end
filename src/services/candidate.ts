import { AxiosResponse } from 'axios';
import {
  ICreateCandidateData,
  ISuccessCreateCandidateData,
} from '../store/ducks/createCandidate/types';
import { api } from './api';
import { getErrorResponse } from './config/getError';

export const createCandidateApi = async (
  data: ICreateCandidateData
): Promise<AxiosResponse<ISuccessCreateCandidateData>> => {
  try {
    const response = await api.post('/candidate', data);

    return response;
  } catch (error) {
    throw getErrorResponse(error);
  }
};

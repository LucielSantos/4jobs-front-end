import { IReturnGetErrorResponse } from '../../../services/config/getError';
import { TErrorControlState } from '../types';

// Action types
export const CreateCandidateActionTypes = {
  HANDLE_CREATE_CANDIDATE: '@crateCandidate/HANDLE_CREATE_CANDIDATE',
  HANDLE_SET_LOADING: '@crateCandidate/HANDLE_SET_LOADING',
  HANDLE_SET_ERROR_RESPONSE: '@crateCandidate/HANDLE_SET_ERROR_RESPONSE',
  HANDLE_SET_SUCCESS_RESPONSE: '@crateCandidate/HANDLE_SET_SUCCESS_RESPONSE',
  HANDLE_RESET_STATE: '@crateCandidate/HANDLE_RESET_STATE',
};

// Data types
export interface ICreateCandidateSetLoading {
  field: keyof ICreateCandidateLoadings;
  value: boolean;
}
export interface ICreateCandidateData {
  email: string;
  name: string;
  password: string;
}

export interface ISuccessCreateCandidateData extends ICreateCandidateData {
  id: string;
}

interface ICreateCandidateLoadings {
  create: boolean;
}

// State types
export interface ICreateCandidateState {
  loadings: ICreateCandidateLoadings;
  errorResponse: IReturnGetErrorResponse;
  successResponse?: ISuccessCreateCandidateData;
  error: TErrorControlState;
}

import { TErrorControlState } from '../types';

// Action types
export const CreateCandidateActionTypes = {
  HANDLE_CREATE_CANDIDATE: '@crateCandidate/HANDLE_CREATE_CANDIDATE',
  HANDLE_SET_LOADING: '@crateCandidate/HANDLE_SET_LOADING',
};

// Data types
export interface ICreateCandidateSetLoading {
  field: keyof ICreateCandidateLoadings;
  value: boolean;
}
export interface ICreateCandidateData {
  userName: string;
  password: string;
}

interface ICreateCandidateLoadings {
  create: boolean;
}

// State types
export interface ICreateCandidateState {
  loadings: ICreateCandidateLoadings;
  error: TErrorControlState;
}

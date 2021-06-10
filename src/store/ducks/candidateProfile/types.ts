import { ICandidateDetails } from '../../../types';

// Action types
export const CandidateProfileActionTypes = {
  HANDLE_SET_LOADING: '@candidateProfile/HANDLE_SET_LOADING',
  HANDEL_LOAD_DETAILS: '@candidateProfile/HANDEL_LOAD_DETAILS',
  HANDEL_SET_DETAILS: '@candidateProfile/HANDEL_SET_DETAILS',
  HANDEL_EDIT: '@candidateProfile/HANDEL_EDIT',
};

// Data types
export interface ICandidateProfileLoadings {
  page: boolean;
  save: boolean;
}

// State types
export interface ICandidateProfileState {
  loadings: ICandidateProfileLoadings;
  details: ICandidateDetails | false;
}

import { IJobCandidateDetails } from '../../../types';

// Action types
export const CandidateJobDetailsActionTypes = {
  HANDLE_SET_LOADING: '@candidateJobDetails/HANDLE_SET_LOADING',
  HANDLE_LOAD_JOB_DETAILS: '@candidateJobDetails/HANDLE_LOAD_JOB_DETAILS',
  HANDLE_SET_JOB_DETAILS: '@candidateJobDetails/HANDLE_SET_JOB_DETAILS',
  HANDLE_SET_DIALOG: '@candidateJobDetails/HANDLE_SET_DIALOG',
};

// Data types
export interface ICandidateJobDetailsLoadings {
  getDetails: boolean;
}
export interface ICandidateJobDetailsDialogs {
  reply: boolean;
}

// State types
export interface ICandidateJobDetailsState {
  loadings: ICandidateJobDetailsLoadings;
  jobDetails: IJobCandidateDetails | false;
  dialogs: ICandidateJobDetailsDialogs;
}

import { IJobPreview } from '../../../types';

// Action types
export const CandidateJobsActionTypes = {
  ON_LOAD_JOBS: '@candidateJobs/ON_LOAD_JOBS',
  ON_GET_JOB_PREVIEW: '@candidateJobs/ON_GET_JOB_PREVIEW',
  HANDLE_SET_LOADING: '@candidateJobs/HANDLE_SET_LOADING',
  HANDLE_SET_DIALOG: '@candidateJobs/ON_LOAD_PAGE',
  HANDLE_SET_JOB_PREVIEW: '@candidateJobs/HANDLE_SET_JOB_PREVIEW',
};

// Data types
export interface ICandidateJobsLoadings {
  loadJobs: boolean;
  getPreview: boolean;
}

export interface ICandidateJobsDialogs {
  applyJob: boolean;
}

export interface ICandidateJobsSetDialogs {
  field: keyof ICandidateJobsDialogs;
  value: boolean;
}

export interface ICandidateJobsSetLoadings {
  field: keyof ICandidateJobsLoadings;
  value: boolean;
}

// State types
export interface ICandidateJobsState {
  loadings: ICandidateJobsLoadings;
  dialogs: ICandidateJobsDialogs;
  jobPreview: IJobPreview | false;
}

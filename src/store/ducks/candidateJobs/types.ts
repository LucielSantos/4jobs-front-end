import { IJobCandidateList, IJobPreview } from '../../../types';

// Action types
export const CandidateJobsActionTypes = {
  ON_LOAD_JOBS: '@candidateJobs/ON_LOAD_JOBS',
  ON_GET_JOB_PREVIEW: '@candidateJobs/ON_GET_JOB_PREVIEW',
  ON_SET_JOBS: '@candidateJobs/ON_SET_JOBS',
  HANDLE_SET_LOADING: '@candidateJobs/HANDLE_SET_LOADING',
  HANDLE_SET_DIALOG: '@candidateJobs/ON_LOAD_PAGE',
  HANDLE_SET_JOB_PREVIEW: '@candidateJobs/HANDLE_SET_JOB_PREVIEW',
  HANDLE_SET_APPLY_MODAL_STATE: '@candidateJobs/HANDLE_SET_APPLY_MODAL_STATE',
  HANDLE_CLEAN_APPLY_MODAL: '@candidateJobs/HANDLE_CLEAN_APPLY_MODAL',
  HANDLE_APPLY_JOB: '@candidateJobs/HANDLE_APPLY_JOB',
  HANDLE_SUCCESS_APPLY_JOB: '@candidateJobs/HANDLE_SUCCESS_APPLY_JOB',
};

// Data types
export interface ICandidateJobsLoadings {
  loadJobs: boolean;
  getPreview: boolean;
  applyJob: boolean;
}

export interface ICandidateJobsDialogs {
  applyJob: boolean;
  messages: boolean;
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
  applyModalState: 1 | 2;
  jobs: IJobCandidateList[];
}

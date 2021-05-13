// Action types
export const CandidateJobsActionTypes = {
  ON_LOAD_JOBS: '@candidateJobs/ON_LOAD_JOBS',
  HANDLE_SET_LOADING: '@candidateJobs/HANDLE_SET_LOADING',
  HANDLE_SET_DIALOG: '@candidateJobs/ON_LOAD_PAGE',
};

// Data types
export interface ICandidateJobsLoadings {
  loadJobs: boolean;
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
}

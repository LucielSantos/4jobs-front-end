// Action types
export const CandidateJobDetailsActionTypes = {
  HANDLE_SET_LOADING: '@candidateJobDetails/HANDLE_SET_LOADING',
  HANDLE_LOAD_JOB_DETAILS: '@candidateJobDetails/HANDLE_LOAD_JOB_DETAILS',
};

// Data types
export interface ICandidateJobDetailsLoadings {
  page: boolean;
}

// State types
export interface ICandidateJobDetailsState {
  loadings: ICandidateJobDetailsLoadings;
}

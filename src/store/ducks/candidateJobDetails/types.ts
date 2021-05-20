// Action types
export const CandidateJobDetailsActionTypes = {
  HANDLE_SET_LOADING: '@candidateJobDetails/HANDLE_SET_LOADING',
  ON_LOAD_PAGE: '@candidateJobDetails/ON_LOAD_PAGE',
};

// Data types
export interface ICandidateJobDetailsLoadings {
  page: boolean;
}

// State types
export interface ICandidateJobDetailsState {
  loadings: ICandidateJobDetailsLoadings;
}

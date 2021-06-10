// Action types
export const CandidateProfileActionTypes = {
  HANDLE_SET_LOADING: '@candidateProfile/HANDLE_SET_LOADING',
  HANDEL_LOAD_DETAILS: '@candidateProfile/HANDEL_LOAD_DETAILS',
};

// Data types
export interface ICandidateProfileLoadings {
  page: boolean;
}

// State types
export interface ICandidateProfileState {
  loadings: ICandidateProfileLoadings;
}

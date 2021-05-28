// Action types
export const ManageJobActionTypes = {
  HANDLE_SET_LOADING: '@manageJob/HANDLE_SET_LOADING',
  HANDLE_LOAD_CANDIDATES: '@manageJob/HANDLE_LOAD_CANDIDATES',
};

// Data types
export interface IManageJobLoadings {
  loadCandidates: boolean;
}

// State types
export interface IManageJobState {
  loadings: IManageJobLoadings;
}

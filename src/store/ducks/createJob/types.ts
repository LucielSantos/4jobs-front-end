// Action types
export const CreateJobActionTypes = {
  HANDLE_SET_LOADING: '@createJob/HANDLE_SET_LOADING',
  ON_LOAD_PAGE: '@createJob/ON_LOAD_PAGE',
};

// Data types
export interface ICreateJobLoadings {
  page: boolean;
}

// State types
export interface ICreateJobState {
  loadings: ICreateJobLoadings;
}

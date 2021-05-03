// Action types
export const CompanyJobsActionTypes = {
  HANDLE_SET_LOADING: '@companyJobs/HANDLE_SET_LOADING',
  ON_LOAD_PAGE: '@companyJobs/ON_LOAD_PAGE',
};

// Data types
export interface ICompanyJobsLoadings {
  page: boolean;
}

// State types
export interface ICompanyJobsState {
  loadings: ICompanyJobsLoadings;
}

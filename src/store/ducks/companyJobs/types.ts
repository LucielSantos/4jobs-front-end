import { IJob } from '../createJob/types';

// Action types
export const CompanyJobsActionTypes = {
  HANDLE_SET_LOADING: '@companyJobs/HANDLE_SET_LOADING',
  ON_LOAD_JOBS: '@companyJobs/ON_LOAD_JOBS',
  ON_SET_JOBS: '@companyJobs/ON_SET_JOBS',
};

// Data types
export interface ICompanyJobsLoadings {
  loadJobs: boolean;
}

export interface IJobInList {
  id: string;
  title: string;
  description: string;
  observations: string;
  deadlineResolve: number;
  tags: IJob['tags'];
  candidates: number;
  resolved: number;
  answering: number;
  inEvaluation: number;
  // eslint-disable-next-line
  created_at: string;
}

// State types
export interface ICompanyJobsState {
  loadings: ICompanyJobsLoadings;
  jobs: IJobInList[];
}

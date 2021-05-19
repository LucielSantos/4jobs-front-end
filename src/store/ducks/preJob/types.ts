import { IJobPreview } from '../../../types';

// Action types
export const PreJobActionTypes = {
  HANDLE_SET_LOADING: '@preJob/HANDLE_SET_LOADING',
  HANDLE_LOAD_JOB_PREVIEW: '@preJob/HANDLE_LOAD_JOB_PREVIEW',
  HANDLE_SET_JOB_PREVIEW: '@preJob/HANDLE_SET_JOB_PREVIEW',
};

// Data types
export interface IPreJobLoadings {
  page: boolean;
}

// State types
export interface IPreJobState {
  loadings: IPreJobLoadings;
  jobPreview: IJobPreview | false;
}

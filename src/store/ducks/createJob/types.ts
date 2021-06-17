import { TDynamicFormValue } from '../../../constants';
import { IReturnGetErrorResponse } from '../../../services/config/getError';
import { TErrorControlState } from '../types';

// Action types
export const CreateJobActionTypes = {
  HANDLE_SET_LOADING: '@createJob/HANDLE_SET_LOADING',
  ON_LOAD_PAGE: '@createJob/ON_LOAD_PAGE',
  ON_SET_DIALOG: '@createJob/ON_SET_DIALOG',
  HANDLE_CREATE_JOB: '@createJob/HANDLE_CREATE_JOB',
  HANDLE_SET_ERROR_RESPONSE: '@createJob/HANDLE_SET_ERROR_RESPONSE',
  HANDLE_SET_SUCCESS_RESPONSE: '@createJob/HANDLE_SET_SUCCESS_RESPONSE',
  ON_RESET_STATE: '@createJob/ON_RESET_STATE',
};

// Data types
export interface ICreateJob {
  title: string;
  deadlineResolve: number;
  description: string;
  expectedResolution: string;
  observations: string;
  observationsAfterEvaluation: string;
  tags: string[];
  fields: IDynamicFormField[];
}

export interface IJob extends ICreateJob {
  id: string;
}

export interface ICreateJobLoadings {
  page: boolean;
  save: boolean;
}

export interface ICreateJobDialogs {
  crateForm: boolean;
}

export interface ISetDialogParam {
  field: keyof ICreateJobDialogs;
  value: boolean;
}
export interface ISetLoadingParam {
  field: keyof ICreateJobLoadings;
  value: boolean;
}

export interface IDynamicFormField {
  title: string;
  type: TDynamicFormValue;
  required: boolean;
}

// State types
export interface ICreateJobState {
  loadings: ICreateJobLoadings;
  dialogs: ICreateJobDialogs;
  errorResponse: IReturnGetErrorResponse;
  successResponse?: IJob;
  error: TErrorControlState;
}

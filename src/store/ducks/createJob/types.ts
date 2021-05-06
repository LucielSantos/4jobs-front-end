import { TDynamicFormValue } from '../../../constants';

// Action types
export const CreateJobActionTypes = {
  HANDLE_SET_LOADING: '@createJob/HANDLE_SET_LOADING',
  ON_LOAD_PAGE: '@createJob/ON_LOAD_PAGE',
  ON_SET_DIALOG: '@createJob/ON_SET_DIALOG',
};

// Data types
export interface ICreateJobLoadings {
  page: boolean;
}

export interface ICreateJobDialogs {
  crateForm: boolean;
}

export interface ISetDialogParam {
  field: keyof ICreateJobDialogs;
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
}

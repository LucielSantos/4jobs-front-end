import { TUserTypeNum } from '../../../constants';
import { ISuccessCreateCandidateData } from '../createCandidate/types';
import { ISuccessCreateCompanyData } from '../createCompany/types';

// Action types
export const LoginActionTypes = {
  SET_LOADING: '@login/SET_LOADING',
  HANDLE_LOGIN: '@login/HANDLE_LOGIN',
  SET_DIALOG: '@login/SET_DIALOG',
};

// Data types
export interface ILogin {
  login: string;
  password: string;
}

export interface ILoginSetDialog {
  field: keyof ILoginStateDialogs;
  value: boolean;
}

export interface ILoginStateDialogs {
  chooseSignUpType: boolean;
}

export interface ILoginSuccessData {
  token: string;
  user: ISuccessCreateCandidateData | ISuccessCreateCompanyData;
  userType: TUserTypeNum;
}

// State type
export interface ILoginState {
  readonly data: ILogin;
  readonly loading: boolean;
  readonly dialogs: ILoginStateDialogs;
}

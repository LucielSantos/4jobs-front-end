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

// State type
export interface ILoginState {
  readonly data: ILogin;
  readonly loading: boolean;
  readonly dialogs: ILoginStateDialogs;
}

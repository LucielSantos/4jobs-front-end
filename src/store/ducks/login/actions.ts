import { action } from 'typesafe-actions';
import { ILogin, ILoginSetDialog, LoginActionTypes } from './types';

export const setLoading = (value: boolean) =>
  action(LoginActionTypes.SET_LOADING, { value });

export const handleLogin = (loginData: ILogin) =>
  action(LoginActionTypes.HANDLE_LOGIN, loginData);

export const handleSetDialog = (
  field: ILoginSetDialog['field'],
  value: ILoginSetDialog['value']
) => action(LoginActionTypes.SET_DIALOG, { field, value });

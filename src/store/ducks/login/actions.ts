import { action } from 'typesafe-actions';
import { ILogin, ILoginSetDialog, LoginActionTypes } from './types';

export const setLoading = (value: boolean) =>
  action(LoginActionTypes.SET_LOADING, { value });

export const handleLogin = (loginData: ILogin, jobId: string | false) =>
  action(LoginActionTypes.HANDLE_LOGIN, { data: loginData, jobId });

export const handleSetDialog = (
  field: ILoginSetDialog['field'],
  value: ILoginSetDialog['value']
) => action(LoginActionTypes.SET_DIALOG, { field, value });

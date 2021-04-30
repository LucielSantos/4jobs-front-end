import { call, ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { ISagaParam } from '../types';
import { setLoading } from './actions';
import { LoginActionTypes, ILogin, ILoginSuccessData } from './types';
import { authenticateApi } from '../../../services';
import { AxiosResponse } from 'axios';
import { history, setStorageItem } from '../../../utils';
import { onSetLoggedUser } from '../main/actions';
import { routePaths } from '../../../routes';

export function* login(param: ISagaParam<ILogin>) {
  try {
    yield put(setLoading(true));

    const response: AxiosResponse<ILoginSuccessData> = yield call(
      authenticateApi,
      param.payload
    );

    setStorageItem('local', 'token', response.data.token);
    setStorageItem('local', 'userType', response.data.userType);
    setStorageItem('local', 'user', response.data.user);

    yield put(onSetLoggedUser(response.data.user, response.data.userType));

    history.push(routePaths.COMPANY_JOBS);

    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
  }
}

export function loginRootSaga(): ForkEffect<never>[] {
  return [takeEvery(LoginActionTypes.HANDLE_LOGIN, login)];
}

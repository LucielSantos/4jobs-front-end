import { call, ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { ISagaParam } from '../types';
import { setLoading } from './actions';
import { LoginActionTypes, ILogin, ILoginSuccessData } from './types';
import { authenticateApi } from '../../../services';
import { AxiosResponse } from 'axios';

export function* login(param: ISagaParam<ILogin>) {
  try {
    yield put(setLoading(true));

    const response: AxiosResponse<ILoginSuccessData> = yield call(
      authenticateApi,
      param.payload
    );

    console.log(response);

    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
  }
}

export function loginRootSaga(): ForkEffect<never>[] {
  return [takeEvery(LoginActionTypes.HANDLE_LOGIN, login)];
}

import { ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { ISagaParam } from '../types';
import { setLoading } from './actions';
import { LoginActionTypes, ILogin } from './types';

export function* login(param: ISagaParam<ILogin>) {
  try {
    yield put(setLoading(true));

    console.log(param.payload);

    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
  }
}

export function loginRootSaga(): ForkEffect<never>[] {
  return [takeEvery(LoginActionTypes.HANDLE_LOGIN, login)];
}

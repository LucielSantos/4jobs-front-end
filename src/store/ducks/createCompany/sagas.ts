import { ForkEffect, put, takeEvery, call } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { createCompanyApi } from '../../../services/company';
import { ISagaParam } from '../types';
import { onSetCompanyLoading } from './actions';
import { CreateCompanyActionTypes, ICreateCompanyData } from './types';

function* handleCreateCompany(data: ISagaParam<ICreateCompanyData>) {
  try {
    yield put(onSetCompanyLoading('create', true));

    const response: Promise<AxiosResponse<ICreateCompanyData>> = yield call(
      createCompanyApi,
      data.payload
    );

    console.log(response);

    yield put(onSetCompanyLoading('create', false));
  } catch (error) {
    console.log('Error aki');
    console.log(error);

    yield put(onSetCompanyLoading('create', false));
  }
}
export function createCompanyRootSaga(): ForkEffect<never>[] {
  return [takeEvery(CreateCompanyActionTypes.HANDLE_CREATE, handleCreateCompany)];
}

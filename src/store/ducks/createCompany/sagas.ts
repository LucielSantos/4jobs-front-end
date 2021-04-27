import { ForkEffect, put, takeEvery, call } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { createCompanyApi } from '../../../services/company';
import { ISagaParam } from '../types';
import {
  onResetState,
  onSetCompanyLoading,
  onSetErrorResponse,
  onSetSuccessResponse,
} from './actions';
import {
  CreateCompanyActionTypes,
  ICreateCompanyData,
  ISuccessCreateCompanyData,
} from './types';

function* handleCreateCompany(data: ISagaParam<ICreateCompanyData>) {
  try {
    yield put(onSetCompanyLoading('create', true));

    const response: AxiosResponse<ISuccessCreateCompanyData> = yield call(
      createCompanyApi,
      data.payload
    );

    console.log(response);

    yield put(onSetSuccessResponse(response.data));

    yield put(onSetCompanyLoading('create', false));

    yield put(onResetState());
  } catch (error) {
    yield put(onSetErrorResponse(error));

    yield put(onSetCompanyLoading('create', false));
  }
}
export function createCompanyRootSaga(): ForkEffect<never>[] {
  return [takeEvery(CreateCompanyActionTypes.HANDLE_CREATE, handleCreateCompany)];
}

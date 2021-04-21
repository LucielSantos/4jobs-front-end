import { ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { onSetCompanyLoading } from './actions';
import { CreateCompanyActionTypes, ICreateCompanyData } from './types';

function* handleCreateCompany(data: ISagaParam<ICreateCompanyData>) {
  try {
    put(onSetCompanyLoading('create', true));

    console.log(data);

    put(onSetCompanyLoading('create', false));
  } catch (error) {
    put(onSetCompanyLoading('create', false));
  }
}
export function createCompanyRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(CreateCompanyActionTypes.HANDLE_CREATE, handleCreateCompany),
  ];
}

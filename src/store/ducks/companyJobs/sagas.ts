import { ForkEffect, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { CompanyJobsActionTypes } from './types';

function* onLoadPage(data: ISagaParam<{}>) {
  console.log(data);
}

export function companyJobsRootSaga(): ForkEffect<never>[] {
  return [takeEvery(CompanyJobsActionTypes.ON_LOAD_PAGE, onLoadPage)];
}

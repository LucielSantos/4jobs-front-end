import { ForkEffect, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { CreateJobActionTypes } from './types';

function* onLoadPage(data: ISagaParam<{}>) {
  console.log(data);
}

export function createJobRootSaga(): ForkEffect<never>[] {
  return [takeEvery(CreateJobActionTypes.ON_LOAD_PAGE, onLoadPage)];
}

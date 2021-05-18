import { ForkEffect, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { PreJobActionTypes } from './types';

function* onLoadPage(data: ISagaParam<{}>) {
  console.log(data);
}

export function preJobRootSaga(): ForkEffect<never>[] {
  return [takeEvery(PreJobActionTypes.ON_LOAD_PAGE, onLoadPage)];
}

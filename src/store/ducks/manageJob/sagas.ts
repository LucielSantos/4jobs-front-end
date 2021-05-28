import { ForkEffect, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { ManageJobActionTypes } from './types';

function* handleLoadCandidates(data: ISagaParam<{}>) {
  console.log(data);
}

export function manageJobRootSaga(): ForkEffect<never>[] {
  return [takeEvery(ManageJobActionTypes.HANDLE_LOAD_CANDIDATES, handleLoadCandidates)];
}

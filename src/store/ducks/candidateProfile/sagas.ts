import { ForkEffect, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { CandidateProfileActionTypes } from './types';

function* handleLoadDetails(data: ISagaParam<{}>) {
  console.log(data);
}

export function candidateProfileRootSaga(): ForkEffect<never>[] {
  return [takeEvery(CandidateProfileActionTypes.HANDEL_LOAD_DETAILS, handleLoadDetails)];
}

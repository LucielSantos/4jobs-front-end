import { ForkEffect, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { CandidateJobDetailsActionTypes } from './types';

function* onLoadPage(data: ISagaParam<{}>) {
  console.log(data);
}

export function candidateJobDetailsRootSaga(): ForkEffect<never>[] {
  return [takeEvery(CandidateJobDetailsActionTypes.ON_LOAD_PAGE, onLoadPage)];
}

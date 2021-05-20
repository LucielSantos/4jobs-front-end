import { ForkEffect, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { CandidateJobDetailsActionTypes } from './types';

function* handleLoadJobDetails(data: ISagaParam<{ jobId: string }>) {
  console.log(data);
}

export function candidateJobDetailsRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(
      CandidateJobDetailsActionTypes.HANDLE_LOAD_JOB_DETAILS,
      handleLoadJobDetails
    ),
  ];
}

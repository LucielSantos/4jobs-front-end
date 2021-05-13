import { ForkEffect, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { CandidateJobsActionTypes } from './types';

function* onLoadJobs(data: ISagaParam<{}>) {
  console.log(data);
}

export function candidateJobsRootSaga(): ForkEffect<never>[] {
  return [takeEvery(CandidateJobsActionTypes.ON_LOAD_JOBS, onLoadJobs)];
}

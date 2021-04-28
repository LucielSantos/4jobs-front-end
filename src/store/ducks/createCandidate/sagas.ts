import { ForkEffect, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { CreateCandidateActionTypes, ICreateCandidateData } from './types';

function* handleCreateCandidate(data: ISagaParam<ICreateCandidateData>) {
  console.log(data);
}

export function createCandidateRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(CreateCandidateActionTypes.HANDLE_CREATE_CANDIDATE, handleCreateCandidate),
  ];
}

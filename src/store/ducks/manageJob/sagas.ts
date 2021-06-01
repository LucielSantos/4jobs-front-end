import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { getCandidatesByJob } from '../../../services';
import { IListCandidateByJob } from '../../../types';
import { ISagaParam } from '../types';
import { ManageJobActionTypes } from './types';
import { handleSetLoading, handleSetCandidates } from './actions';

function* handleLoadCandidates({ payload }: ISagaParam<{ jobId: string }>) {
  try {
    yield put(handleSetLoading('loadCandidates', true));

    const response: AxiosResponse<IListCandidateByJob> = yield call(
      getCandidatesByJob,
      payload.jobId
    );

    yield put(handleSetCandidates(response.data));

    yield put(handleSetLoading('loadCandidates', false));
  } catch (error) {
    yield put(handleSetLoading('loadCandidates', false));
  }
}

export function manageJobRootSaga(): ForkEffect<never>[] {
  return [takeEvery(ManageJobActionTypes.HANDLE_LOAD_CANDIDATES, handleLoadCandidates)];
}

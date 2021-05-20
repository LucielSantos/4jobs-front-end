import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { CandidateJobDetailsActionTypes } from './types';
import { onSetLoading, handleSetJobDetails } from './actions';
import { AxiosResponse } from 'axios';
import { IJobCandidateDetails } from '../../../types';
import { getCandidateJobDetails } from '../../../services';

function* handleLoadJobDetails(data: ISagaParam<{ jobId: string }>) {
  try {
    yield put(onSetLoading('getDetails', true));

    const response: AxiosResponse<IJobCandidateDetails> = yield call(
      getCandidateJobDetails,
      data.payload.jobId
    );

    yield put(handleSetJobDetails(response.data));

    yield put(onSetLoading('getDetails', false));
  } catch (error) {
    yield put(onSetLoading('getDetails', false));
  }
}

export function candidateJobDetailsRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(
      CandidateJobDetailsActionTypes.HANDLE_LOAD_JOB_DETAILS,
      handleLoadJobDetails
    ),
  ];
}

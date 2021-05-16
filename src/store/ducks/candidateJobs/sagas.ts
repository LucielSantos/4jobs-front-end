import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { getJobPreview } from '../../../services/job';
import { IJobPreview } from '../../../types';
import { ISagaParam } from '../types';
import { handleSetJobPreview, onSetCandidateJobLoading } from './actions';
import { CandidateJobsActionTypes } from './types';

function* onLoadJobs(data: ISagaParam<{}>) {
  console.log(data);
}

function* onGetJobPreview({ payload: { jobId } }: ISagaParam<{ jobId: string }>) {
  try {
    yield put(onSetCandidateJobLoading('getPreview', true));

    const response: AxiosResponse<IJobPreview> = yield call(getJobPreview, jobId);

    yield put(handleSetJobPreview(response.data));

    yield put(onSetCandidateJobLoading('getPreview', false));
  } catch (error) {
    yield put(onSetCandidateJobLoading('getPreview', false));
  }
}

export function candidateJobsRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(CandidateJobsActionTypes.ON_LOAD_JOBS, onLoadJobs),
    takeEvery(CandidateJobsActionTypes.ON_GET_JOB_PREVIEW, onGetJobPreview),
  ];
}

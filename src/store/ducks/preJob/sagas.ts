import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { ISagaParam } from '../types';
import { PreJobActionTypes } from './types';
import { handleSetLoading, handleSetJobPreview } from './actions';
import { IJobPreview } from '../../../types';
import { getJobPreview } from '../../../services/job';
import { routePaths } from '../../../routes';
import { history } from '../../../utils';

function* handleLoadJobPreview({ payload: { jobId } }: ISagaParam<{ jobId: string }>) {
  try {
    yield put(handleSetLoading('page', true));

    const response: AxiosResponse<IJobPreview> = yield call(getJobPreview, jobId);

    yield put(handleSetJobPreview(response.data));

    yield put(handleSetLoading('page', false));
  } catch (error) {
    history.push(routePaths.LOGIN);

    yield put(handleSetLoading('page', false));
  }
}

export function preJobRootSaga(): ForkEffect<never>[] {
  return [takeEvery(PreJobActionTypes.HANDLE_LOAD_JOB_PREVIEW, handleLoadJobPreview)];
}

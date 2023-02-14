import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { ISagaParam } from '../types';
import { PreJobActionTypes } from './types';
import { handleSetLoading, handleSetJobPreview } from './actions';
import { IJobPreview } from '../../../types';
import { getJobPreview } from '../../../services/job';
import { routePaths } from '../../../routes';
import { getUserType, history } from '../../../utils';
import { userTypes } from '../../../constants';
import {
  handleSetApplyModalState,
  handleSetJobPreview as handleSetCandidateJobPreview,
  onSetCandidateJobDialog,
} from '../candidateJobs/actions';

function* handleLoadJobPreview({
  payload: { jobId },
}: ISagaParam<{ jobId: string }>) {
  try {
    yield put(handleSetLoading('page', true));

    const response: AxiosResponse<IJobPreview> = yield call(
      getJobPreview,
      jobId
    );

    const userType = getUserType();

    if (userType && userType === userTypes.candidate) {
      yield put(handleSetCandidateJobPreview(response.data));
      yield put(handleSetApplyModalState(2));
      yield put(onSetCandidateJobDialog('applyJob', true));

      history.push(routePaths.CANDIDATE_JOBS);
    }

    yield put(handleSetJobPreview(response.data));

    yield put(handleSetLoading('page', false));
  } catch (error) {
    history.push(routePaths.LOGIN);

    yield put(handleSetLoading('page', false));
  }
}

export function preJobRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(PreJobActionTypes.HANDLE_LOAD_JOB_PREVIEW, handleLoadJobPreview),
  ];
}

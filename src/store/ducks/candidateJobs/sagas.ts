import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { getCandidateJobs, postApplyCandidateJob } from '../../../services';
import { getJobPreview } from '../../../services/job';
import { IJobCandidateList, IJobPreview, ILinkJob } from '../../../types';
import { openNotification } from '../../../utils';
import { ISagaParam } from '../types';
import {
  handleSetJobPreview,
  onSetCandidateJobLoading,
  handleSetApplyModalState,
  onSetJobs,
  handleSuccessApplyJob,
  handleCleanApplyModal,
} from './actions';
import { CandidateJobsActionTypes } from './types';

function* onLoadJobs() {
  try {
    yield put(onSetCandidateJobLoading('loadJobs', true));

    const response: AxiosResponse<IJobCandidateList[]> = yield call(getCandidateJobs);

    yield put(onSetJobs(response.data));

    yield put(onSetCandidateJobLoading('loadJobs', false));
  } catch (error) {
    yield put(onSetCandidateJobLoading('loadJobs', false));
  }
}

function* onGetJobPreview({ payload: { jobId } }: ISagaParam<{ jobId: string }>) {
  try {
    yield put(onSetCandidateJobLoading('getPreview', true));

    const response: AxiosResponse<IJobPreview> = yield call(getJobPreview, jobId);

    yield put(handleSetJobPreview(response.data));

    yield put(onSetCandidateJobLoading('getPreview', false));

    yield put(handleSetApplyModalState(2));
  } catch (error) {
    yield put(onSetCandidateJobLoading('getPreview', false));
  }
}

function* handleApplyJob({ payload }: ISagaParam<ILinkJob>) {
  try {
    yield put(onSetCandidateJobLoading('applyJob', true));

    const response: AxiosResponse<IJobCandidateList> = yield call(
      postApplyCandidateJob,
      payload
    );

    openNotification('Candidatura executada com sucesso');

    yield put(handleSuccessApplyJob(response.data));

    yield put(handleCleanApplyModal(true));

    yield put(onSetCandidateJobLoading('applyJob', false));
  } catch (error) {
    yield put(onSetCandidateJobLoading('applyJob', false));
  }
}

export function candidateJobsRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(CandidateJobsActionTypes.ON_LOAD_JOBS, onLoadJobs),
    takeEvery(CandidateJobsActionTypes.ON_GET_JOB_PREVIEW, onGetJobPreview),
    takeEvery(CandidateJobsActionTypes.HANDLE_APPLY_JOB, handleApplyJob),
  ];
}

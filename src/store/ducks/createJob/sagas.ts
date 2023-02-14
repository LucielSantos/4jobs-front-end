import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { createJobApi } from '../../../services/job';
import { ISagaParam } from '../types';
import {
  onSetLoading,
  handleSetErrorResponse,
  handleSetSuccessResponse,
  onResetCreateJobState,
} from './actions';
import { CreateJobActionTypes, ICreateJob, IJob } from './types';

function* onLoadPage(data: ISagaParam<{}>) {
  console.log(data);
}

function* handleCreateJob(data: ISagaParam<ICreateJob>) {
  try {
    yield put(onSetLoading('save', true));

    const response: AxiosResponse<IJob> = yield call(
      createJobApi,
      data.payload
    );

    yield put(handleSetSuccessResponse(response.data));

    yield put(onSetLoading('save', false));

    yield put(onResetCreateJobState());
  } catch (error) {
    yield put(handleSetErrorResponse(error));

    yield put(onSetLoading('save', false));
  }
}

export function createJobRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(CreateJobActionTypes.ON_LOAD_PAGE, onLoadPage),
    takeEvery(CreateJobActionTypes.HANDLE_CREATE_JOB, handleCreateJob),
  ];
}

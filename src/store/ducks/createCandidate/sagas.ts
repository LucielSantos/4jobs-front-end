import { ForkEffect, put, takeEvery, call } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import {
  CreateCandidateActionTypes,
  ICreateCandidateData,
  ISuccessCreateCandidateData,
} from './types';
import {
  onResetState,
  onSetErrorResponse,
  onSetLoading,
  onSetSuccessResponse,
} from './actions';
import { createCandidateApi } from '../../../services/candidate';
import { AxiosResponse } from 'axios';

function* handleCreateCandidate(data: ISagaParam<ICreateCandidateData>) {
  try {
    yield put(onSetLoading('create', true));

    console.log(data.payload);

    const response: AxiosResponse<ISuccessCreateCandidateData> = yield call(
      createCandidateApi,
      data.payload
    );

    yield put(onSetSuccessResponse(response.data));

    yield put(onSetLoading('create', false));

    yield put(onResetState());
  } catch (error) {
    yield put(onSetErrorResponse(error));

    yield put(onSetLoading('create', false));
  }
}

export function createCandidateRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(CreateCandidateActionTypes.HANDLE_CREATE_CANDIDATE, handleCreateCandidate),
  ];
}

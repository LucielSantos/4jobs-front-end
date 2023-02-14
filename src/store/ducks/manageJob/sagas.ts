import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import {
  getCandidatesByJob,
  patchChangeJobResponseStatus,
} from '../../../services';
import { IDropData, IListCandidateByJob } from '../../../types';
import { ISagaParam } from '../types';
import { ManageJobActionTypes } from './types';
import { handleSetLoading, handleSetCandidates } from './actions';
import { openNotification } from '../../../utils';

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

function* handleChangeStatus({ payload }: ISagaParam<IDropData>) {
  try {
    yield put(handleSetLoading('changeCandidateStatus', true));

    const response: AxiosResponse = yield call(
      patchChangeJobResponseStatus,
      payload.candidate.jobResponseId,
      { newStatus: payload.newStatus }
    );

    if (response.status === 200) {
      openNotification('Candidato movido com sucesso');
    }

    yield put(handleSetLoading('changeCandidateStatus', false));
  } catch (error) {
    yield put(handleSetLoading('changeCandidateStatus', false));
  }
}

export function manageJobRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(
      ManageJobActionTypes.HANDLE_LOAD_CANDIDATES,
      handleLoadCandidates
    ),
    takeEvery(
      ManageJobActionTypes.HANDLE_CHANGE_CANDIDATE_STATUS,
      handleChangeStatus
    ),
  ];
}

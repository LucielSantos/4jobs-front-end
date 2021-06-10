import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';

import { ISagaParam } from '../types';
import { CandidateProfileActionTypes } from './types';
import { handleSetLoading, handleSetDetails } from './actions';
import { getLoggedUser, openNotification } from '../../../utils';
import { ICandidateDetails, ICandidateDetailsEdit } from '../../../types';
import { editCandidateById, getCandidateById } from '../../../services';

function* handleLoadDetails(data: ISagaParam<{}>) {
  try {
    yield put(handleSetLoading('page', true));

    const loggedUser = getLoggedUser();

    if (loggedUser) {
      const response: AxiosResponse<ICandidateDetails> = yield call(
        getCandidateById,
        loggedUser.id
      );

      yield put(handleSetDetails(response.data));
    }

    yield put(handleSetLoading('page', false));
  } catch (error) {
    yield put(handleSetLoading('page', false));
  }
}

function* handleEdit(data: ISagaParam<ICandidateDetailsEdit>) {
  try {
    yield put(handleSetLoading('save', true));

    const loggedUser = getLoggedUser();

    if (loggedUser) {
      const response: AxiosResponse = yield call(
        editCandidateById,
        loggedUser?.id,
        data.payload
      );
      if (response.status === 200) {
        openNotification('Dados editados com sucesso');
      }

      yield put(handleSetLoading('save', false));

      return true;
    }

    yield put(handleSetLoading('save', false));

    return false;
  } catch (error) {
    yield put(handleSetLoading('save', false));

    return false;
  }
}

export function candidateProfileRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(CandidateProfileActionTypes.HANDEL_LOAD_DETAILS, handleLoadDetails),
    takeEvery(CandidateProfileActionTypes.HANDEL_EDIT, handleEdit),
  ];
}

import { ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { CreateCandidateActionTypes, ICreateCandidateData } from './types';
import { onSetErrorResponse, onSetLoading } from './actions';
import { IReturnGetErrorResponse } from '../../../services/config/getError';

function* handleCreateCandidate(data: ISagaParam<ICreateCandidateData>) {
  try {
    yield put(onSetLoading('create', true));

    console.log(data.payload);

    const obj: IReturnGetErrorResponse = {
      error: true,
      formErrors: {
        userName: 'ta errado!',
      },
      isFormError: true,
      toastMessage: 'alguma coisa deu errado man',
    };

    yield put(onSetLoading('create', false));

    throw obj;
  } catch (error) {
    console.log({ ...error });

    yield put(onSetErrorResponse(error));

    yield put(onSetLoading('create', false));
  }
}

export function createCandidateRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(CreateCandidateActionTypes.HANDLE_CREATE_CANDIDATE, handleCreateCandidate),
  ];
}

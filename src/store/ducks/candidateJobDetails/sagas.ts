import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { ISagaParam } from '../types';
import { CandidateJobDetailsActionTypes } from './types';
import { onSetLoading, handleSetJobDetails, handleSetDialog } from './actions';
import { AxiosResponse } from 'axios';
import { IJobCandidateDetails, IResponseFormJob } from '../../../types';
import { getCandidateJobDetails, putReplyForm } from '../../../services';
import { openNotification } from '../../../utils';

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

function* handleReplyForm({ payload }: ISagaParam<{ jobId: string; fields: IResponseFormJob[] }>) {
  try {
    yield put(onSetLoading('saveForm', true));

    const response: AxiosResponse<IJobCandidateDetails> = yield call(putReplyForm, payload.jobId, {
      fields: payload.fields,
    });

    yield put(handleSetJobDetails(response.data));

    openNotification('Sua resposta foi enviada para avaliação');

    yield put(handleSetDialog('reply', false));

    yield put(onSetLoading('saveForm', false));
  } catch (error) {
    yield put(onSetLoading('saveForm', false));
  }
}

export function candidateJobDetailsRootSaga(): ForkEffect<never>[] {
  return [
    takeEvery(CandidateJobDetailsActionTypes.HANDLE_LOAD_JOB_DETAILS, handleLoadJobDetails),
    takeEvery(CandidateJobDetailsActionTypes.HANDLE_REPLY_FORM, handleReplyForm),
  ];
}

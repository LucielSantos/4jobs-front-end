import { call, ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { ISagaParam } from '../types';
import { setLoading } from './actions';
import { LoginActionTypes, ILogin, ILoginSuccessData } from './types';
import { authenticateApi } from '../../../services';
import { AxiosResponse } from 'axios';
import { history, setStorageItem } from '../../../utils';
import { onSetLoggedUser } from '../main/actions';
import {
  handleSetApplyModalState,
  handleSetJobPreview,
  onSetCandidateJobDialog,
} from '../candidateJobs/actions';
import { routePaths } from '../../../routes';
import { userTypes } from '../../../constants';
import { IJobPreview } from '../../../types';
import { getJobPreview } from '../../../services/job';

export function* login(
  param: ISagaParam<{ data: ILogin; jobId: string | false }>
) {
  try {
    yield put(setLoading(true));

    const response: AxiosResponse<ILoginSuccessData> = yield call(
      authenticateApi,
      param.payload.data
    );

    setStorageItem('local', 'token', response.data.token);
    setStorageItem('local', 'userType', response.data.userType);
    setStorageItem('local', 'user', response.data.user);

    yield put(onSetLoggedUser(response.data.user, response.data.userType));

    if (response.data.userType === userTypes.company) {
      history.push(routePaths.COMPANY_JOBS);
    }

    if (response.data.userType === userTypes.candidate) {
      if (param.payload.jobId) {
        const responseJobPreview: AxiosResponse<IJobPreview> = yield call(
          getJobPreview,
          param.payload.jobId
        );

        yield put(handleSetJobPreview(responseJobPreview.data));
        yield put(handleSetApplyModalState(2));
        yield put(onSetCandidateJobDialog('applyJob', true));
      }

      history.push(routePaths.CANDIDATE_JOBS);
    }

    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
  }
}

export function loginRootSaga(): ForkEffect<never>[] {
  return [takeEvery(LoginActionTypes.HANDLE_LOGIN, login)];
}

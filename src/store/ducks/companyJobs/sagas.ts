import { call, ForkEffect, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { getJobsApi } from '../../../services/job';
import { ISagaParam } from '../types';
import { onSetCompanyJobsLoading, onSetJobs } from './actions';
import { CompanyJobsActionTypes, IJobInList } from './types';

function* onLoadPage(data: ISagaParam<{}>) {
  try {
    yield put(onSetCompanyJobsLoading('loadJobs', true));

    const response: AxiosResponse<IJobInList[]> = yield call(getJobsApi);

    yield put(onSetJobs(response.data));

    yield put(onSetCompanyJobsLoading('loadJobs', false));
  } catch (error) {
    yield put(onSetCompanyJobsLoading('loadJobs', false));
  }
}

export function companyJobsRootSaga(): ForkEffect<never>[] {
  return [takeEvery(CompanyJobsActionTypes.ON_LOAD_JOBS, onLoadPage)];
}

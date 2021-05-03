import * as Eff from 'redux-saga/effects';
import { ForkEffect } from 'redux-saga/effects';
import { loginRootSaga } from './login/sagas';
import { mainRootSaga } from './main/sagas';
import { createCompanyRootSaga } from './createCompany/sagas';
import { createCandidateRootSaga } from './createCandidate/sagas';
import { companyJobsRootSaga } from './companyJobs/sagas';
import { createJobRootSaga } from './createJob/sagas';

const all = Eff.all; // <-- new

export function* combineRootSagas(): Generator<ForkEffect<never>[]> {
  const sagas = [
    ...mainRootSaga(),
    ...loginRootSaga(),
    ...createCompanyRootSaga(),
    ...createCandidateRootSaga(),
    ...companyJobsRootSaga(),
    ...createJobRootSaga(),
  ];
  return sagas;
}

export default function* rootSaga(): any {
  const sagas = combineRootSagas();
  return yield all(yield sagas);
}

import * as Eff from 'redux-saga/effects';
import { ForkEffect } from 'redux-saga/effects';
import { loginRootSaga } from './login/sagas';
import { mainRootSaga } from './main/sagas';
import { createCompanyRootSaga } from './createCompany/sagas';

const all = Eff.all; // <-- new

export function* combineRootSagas(): Generator<ForkEffect<never>[]> {
  const sagas = [...mainRootSaga(), ...loginRootSaga(), ...createCompanyRootSaga()];
  return sagas;
}

export default function* rootSaga(): any {
  const sagas = combineRootSagas();
  return yield all(yield sagas);
}

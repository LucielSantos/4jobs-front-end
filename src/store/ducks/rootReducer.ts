import { combineReducers } from 'redux';

import main from './main';
import login from './login';
import createCompany from './createCompany';
import createCandidate from './createCandidate';

export default combineReducers({
  main,
  login,
  createCompany,
  createCandidate,
});

import { combineReducers } from 'redux';

import main from './main';
import login from './login';
import createCompany from './createCompany';
import createCandidate from './createCandidate';
import companyJobs from './companyJobs';

export default combineReducers({
  main,
  login,
  createCompany,
  createCandidate,
  companyJobs,
});

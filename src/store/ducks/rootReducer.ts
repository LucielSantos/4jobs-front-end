import { combineReducers } from 'redux';

import main from './main';
import login from './login';
import createCompany from './createCompany';
import createCandidate from './createCandidate';
import companyJobs from './companyJobs';
import createJob from './createJob';
import candidateJobs from './candidateJobs';
import preJob from './preJob';
import candidateJobDetails from './candidateJobDetails';
import manageJob from './manageJob';
import candidateProfile from './candidateProfile';

export default combineReducers({
  main,
  login,
  createCompany,
  createCandidate,
  companyJobs,
  createJob,
  candidateJobs,
  preJob,
  candidateJobDetails,
  manageJob,
  candidateProfile,
});

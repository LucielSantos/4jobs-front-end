import { action } from 'typesafe-actions';
import { CandidateJobDetailsActionTypes } from './types';

export const handleLoadJobDetails = (jobId: string) =>
  action(CandidateJobDetailsActionTypes.HANDLE_LOAD_JOB_DETAILS, { jobId });

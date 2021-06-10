import { action } from 'typesafe-actions';
import { CandidateProfileActionTypes } from './types';

export const handleLoadDetails = () =>
  action(CandidateProfileActionTypes.HANDEL_LOAD_DETAILS);

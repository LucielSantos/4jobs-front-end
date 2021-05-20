import { action } from 'typesafe-actions';
import { CandidateJobDetailsActionTypes } from './types';

export const onLoadPage = () => action(CandidateJobDetailsActionTypes.ON_LOAD_PAGE);

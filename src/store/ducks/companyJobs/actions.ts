import { action } from 'typesafe-actions';
import { CompanyJobsActionTypes } from './types';

export const onLoadPage = () => action(CompanyJobsActionTypes.ON_LOAD_PAGE);

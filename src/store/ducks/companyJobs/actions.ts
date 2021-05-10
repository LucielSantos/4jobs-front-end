import { action } from 'typesafe-actions';
import { ISetLoadingState } from '../types';
import { CompanyJobsActionTypes, ICompanyJobsLoadings, ICompanyJobsState } from './types';

export const onLoadJobs = () => action(CompanyJobsActionTypes.ON_LOAD_JOBS);
export const onSetJobs = (jobs: ICompanyJobsState['jobs']) =>
  action(CompanyJobsActionTypes.ON_SET_JOBS, jobs);

export const onSetCompanyJobsLoading = (
  field: ISetLoadingState<ICompanyJobsLoadings>['field'],
  value: ISetLoadingState<ICompanyJobsLoadings>['value']
) => action(CompanyJobsActionTypes.HANDLE_SET_LOADING, { field, value });

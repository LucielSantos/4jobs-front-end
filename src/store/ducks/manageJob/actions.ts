import { action } from 'typesafe-actions';
import { IListCandidateByJob } from '../../../types';
import { ISetLoadingState } from '../types';
import { ManageJobActionTypes, IManageJobLoadings } from './types';

export const handleLoadCandidates = (jobId: string) =>
  action(ManageJobActionTypes.HANDLE_LOAD_CANDIDATES, { jobId });

export const handleSetLoading = (
  field: ISetLoadingState<IManageJobLoadings>['field'],
  value: ISetLoadingState<IManageJobLoadings>['value']
) => action(ManageJobActionTypes.HANDLE_SET_LOADING, { field, value });

export const handleSetCandidates = (data: IListCandidateByJob) =>
  action(ManageJobActionTypes.HANDLE_SET_CANDIDATES, data);

import { action } from 'typesafe-actions';
import { IDropData, IListCandidateByJob } from '../../../types';
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

export const handleChangeCandidateStatus = (data: IDropData) =>
  action(ManageJobActionTypes.HANDLE_CHANGE_CANDIDATE_STATUS, data);

export const handelClearMessage = (candidateId: string, columnName: string) =>
  action(ManageJobActionTypes.HANDLE_CLEAR_MESSAGE, { candidateId, columnName });

import { action } from 'typesafe-actions';
import { ISetLoadingState } from '../types';
import { ManageJobActionTypes, IManageJobLoadings } from './types';

export const handleLoadCandidates = () =>
  action(ManageJobActionTypes.HANDLE_LOAD_CANDIDATES);

export const handleSetLoading = (
  field: ISetLoadingState<IManageJobLoadings>['field'],
  value: ISetLoadingState<IManageJobLoadings>['value']
) => action(ManageJobActionTypes.HANDLE_SET_LOADING, { field, value });

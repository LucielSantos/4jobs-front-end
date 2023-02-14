import { action } from 'typesafe-actions';
import { ICandidateDetails, ICandidateDetailsEdit } from '../../../types';
import { ISetLoadingState } from '../types';
import { CandidateProfileActionTypes, ICandidateProfileLoadings } from './types';

export const handleLoadDetails = () => action(CandidateProfileActionTypes.HANDEL_LOAD_DETAILS);

export const handleSetLoading = (
  field: ISetLoadingState<ICandidateProfileLoadings>['field'],
  value: ISetLoadingState<ICandidateProfileLoadings>['value']
) => action(CandidateProfileActionTypes.HANDLE_SET_LOADING, { field, value });

export const handleSetDetails = (data: ICandidateDetails) =>
  action(CandidateProfileActionTypes.HANDEL_SET_DETAILS, data);

export const handleEdit = (data: ICandidateDetailsEdit) =>
  action(CandidateProfileActionTypes.HANDEL_EDIT, data);

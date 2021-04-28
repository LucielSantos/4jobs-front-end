import { action } from 'typesafe-actions';
import { IReturnGetErrorResponse } from '../../../services/config/getError';
import {
  CreateCandidateActionTypes,
  ICreateCandidateData,
  ICreateCandidateSetLoading,
} from './types';

export const onSetLoading = (
  field: ICreateCandidateSetLoading['field'],
  value: ICreateCandidateSetLoading['value']
) => action(CreateCandidateActionTypes.HANDLE_SET_LOADING, { field, value });

export const handleCreateCandidate = (data: ICreateCandidateData) =>
  action(CreateCandidateActionTypes.HANDLE_CREATE_CANDIDATE, data);

export const onSetErrorResponse = (data: IReturnGetErrorResponse) =>
  action(CreateCandidateActionTypes.HANDLE_SET_ERROR_RESPONSE, data);

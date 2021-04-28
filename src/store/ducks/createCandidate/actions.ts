import { action } from 'typesafe-actions';
import {
  CreateCandidateActionTypes,
  ICreateCandidateData,
  ICreateCandidateSetLoading,
} from './types';

export const onSetLoading = ({ field, value }: ICreateCandidateSetLoading) =>
  action(CreateCandidateActionTypes.HANDLE_SET_LOADING, { field, value });

export const handleCreateCandidate = (data: ICreateCandidateData) =>
  action(CreateCandidateActionTypes.HANDLE_CREATE_CANDIDATE, data);

import { action } from 'typesafe-actions';
import { IJobCandidateDetails } from '../../../types';
import { ISetLoadingState } from '../types';
import {
  CandidateJobDetailsActionTypes,
  ICandidateJobDetailsDialogs,
  ICandidateJobDetailsLoadings,
} from './types';

export const handleLoadJobDetails = (jobId: string) =>
  action(CandidateJobDetailsActionTypes.HANDLE_LOAD_JOB_DETAILS, { jobId });

export const handleSetJobDetails = (data: IJobCandidateDetails) =>
  action(CandidateJobDetailsActionTypes.HANDLE_SET_JOB_DETAILS, data);

export const handleSetDialog = (
  field: keyof ICandidateJobDetailsDialogs,
  value: boolean
) => action(CandidateJobDetailsActionTypes.HANDLE_SET_DIALOG, { field, value });

export const onSetLoading = (
  field: ISetLoadingState<ICandidateJobDetailsLoadings>['field'],
  value: ISetLoadingState<ICandidateJobDetailsLoadings>['value']
) => action(CandidateJobDetailsActionTypes.HANDLE_SET_LOADING, { field, value });

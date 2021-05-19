import { action } from 'typesafe-actions';
import { IJobPreview } from '../../../types';
import { ISetLoadingState } from '../types';
import { IPreJobLoadings, PreJobActionTypes } from './types';

export const handleSetLoading = (
  field: ISetLoadingState<IPreJobLoadings>['field'],
  value: ISetLoadingState<IPreJobLoadings>['value']
) => action(PreJobActionTypes.HANDLE_SET_LOADING, { field, value });

export const handleLoadJobPreview = (jobId: string) =>
  action(PreJobActionTypes.HANDLE_LOAD_JOB_PREVIEW, { jobId });

export const handleSetJobPreview = (data: IJobPreview) =>
  action(PreJobActionTypes.HANDLE_SET_JOB_PREVIEW, data);

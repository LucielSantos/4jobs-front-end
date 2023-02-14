import { action } from 'typesafe-actions';
import { IReturnGetErrorResponse } from '../../../services/config/getError';
import { CreateJobActionTypes, ICreateJob, IJob, ISetDialogParam, ISetLoadingParam } from './types';

export const onLoadPage = () => action(CreateJobActionTypes.ON_LOAD_PAGE);

export const onSetDialog = (field: ISetDialogParam['field'], value: ISetDialogParam['value']) =>
  action(CreateJobActionTypes.ON_SET_DIALOG, { field, value });

export const onSetLoading = (field: ISetLoadingParam['field'], value: ISetLoadingParam['value']) =>
  action(CreateJobActionTypes.HANDLE_SET_LOADING, { field, value });

export const handleCreateJob = (data: ICreateJob) =>
  action(CreateJobActionTypes.HANDLE_CREATE_JOB, data);

export const handleSetErrorResponse = (data: IReturnGetErrorResponse) =>
  action(CreateJobActionTypes.HANDLE_SET_ERROR_RESPONSE, data);

export const handleSetSuccessResponse = (data: IJob) =>
  action(CreateJobActionTypes.HANDLE_SET_SUCCESS_RESPONSE, data);

export const onResetCreateJobState = () => action(CreateJobActionTypes.ON_RESET_STATE, {});

import { action } from 'typesafe-actions';
import { IJobPreview } from '../../../types';
import {
  CandidateJobsActionTypes,
  ICandidateJobsSetDialogs,
  ICandidateJobsSetLoadings,
  ICandidateJobsState,
} from './types';

export const onSetCandidateJobDialog = (
  field: ICandidateJobsSetDialogs['field'],
  value: ICandidateJobsSetDialogs['value']
) => action(CandidateJobsActionTypes.HANDLE_SET_DIALOG, { field, value });

export const onSetCandidateJobLoading = (
  field: ICandidateJobsSetLoadings['field'],
  value: ICandidateJobsSetLoadings['value']
) => action(CandidateJobsActionTypes.HANDLE_SET_LOADING, { field, value });

export const handleLoadJobs = () => action(CandidateJobsActionTypes.ON_LOAD_JOBS);

export const handleGetJobPreview = (jobId: string) =>
  action(CandidateJobsActionTypes.ON_GET_JOB_PREVIEW, { jobId });

export const handleSetJobPreview = (jobPreview: IJobPreview) =>
  action(CandidateJobsActionTypes.HANDLE_SET_JOB_PREVIEW, jobPreview);

export const handleSetApplyModalState = (
  newState: ICandidateJobsState['applyModalState']
) => action(CandidateJobsActionTypes.HANDLE_SET_APPLY_MODAL_STATE, newState);

export const handleCleanApplyModal = () =>
  action(CandidateJobsActionTypes.HANDLE_CLEAN_APPLY_MODAL);

export const handleApplyJob = (jobId: string) =>
  action(CandidateJobsActionTypes.HANDLE_APPLY_JOB, { jobId });

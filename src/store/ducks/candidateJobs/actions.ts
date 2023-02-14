import { action } from 'typesafe-actions';
import { IJobCandidateList, IJobPreview, ILinkJob } from '../../../types';
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

export const handleSetApplyModalState = (newState: ICandidateJobsState['applyModalState']) =>
  action(CandidateJobsActionTypes.HANDLE_SET_APPLY_MODAL_STATE, newState);

export const handleCleanApplyModal = (closeModal: boolean = false) =>
  action(CandidateJobsActionTypes.HANDLE_CLEAN_APPLY_MODAL, { closeModal });

export const handleApplyJob = (data: ILinkJob) =>
  action(CandidateJobsActionTypes.HANDLE_APPLY_JOB, data);

export const onSetJobs = (data: IJobCandidateList[]) =>
  action(CandidateJobsActionTypes.ON_SET_JOBS, data);

export const handleSuccessApplyJob = (data: IJobCandidateList) =>
  action(CandidateJobsActionTypes.HANDLE_SUCCESS_APPLY_JOB, data);

export const handleCleanMessage = (jobId: string) =>
  action(CandidateJobsActionTypes.HANDLE_CLEAN_MESSAGE, jobId);

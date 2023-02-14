import { Reducer } from 'redux';
import { CandidateJobsActionTypes, ICandidateJobsState } from './types';

const INITIAL_STATE: ICandidateJobsState = {
  loadings: {
    loadJobs: true,
    getPreview: false,
    applyJob: false,
  },
  dialogs: {
    applyJob: false,
    messages: false,
  },
  jobPreview: false,
  applyModalState: 1,
  jobs: [],
};

const reducer: Reducer<ICandidateJobsState> = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CandidateJobsActionTypes.HANDLE_SET_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          [payload.field]: payload.value,
        },
      };

    case CandidateJobsActionTypes.HANDLE_SET_DIALOG:
      return {
        ...state,
        dialogs: {
          ...state.dialogs,
          [payload.field]: payload.value,
        },
      };

    case CandidateJobsActionTypes.HANDLE_SET_JOB_PREVIEW:
      return {
        ...state,
        jobPreview: payload,
      };

    case CandidateJobsActionTypes.HANDLE_SET_APPLY_MODAL_STATE:
      return {
        ...state,
        applyModalState: payload,
      };

    case CandidateJobsActionTypes.HANDLE_CLEAN_APPLY_MODAL:
      return {
        ...state,
        applyModalState: 1,
        jobPreview: false,
        dialogs: {
          ...state.dialogs,
          applyJob: payload.closeModal ? false : state.dialogs.applyJob,
        },
      };

    case CandidateJobsActionTypes.ON_SET_JOBS:
      return {
        ...state,
        jobs: payload,
      };

    case CandidateJobsActionTypes.HANDLE_SUCCESS_APPLY_JOB:
      return {
        ...state,
        jobs: [...state.jobs, payload],
      };

    case CandidateJobsActionTypes.HANDLE_CLEAN_MESSAGE:
      return {
        ...state,
        jobs: state.jobs.map(job =>
          job.id === payload ? { ...job, hasCompanyMessage: false } : job
        ),
      };

    default:
      return state;
  }
};

export default reducer;

import { Reducer } from 'redux';
import { CandidateJobsActionTypes, ICandidateJobsState } from './types';

const INITIAL_STATE: ICandidateJobsState = {
  loadings: {
    loadJobs: true,
    getPreview: false,
  },
  dialogs: {
    applyJob: false,
  },
  jobPreview: false,
};

const reducer: Reducer<ICandidateJobsState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
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

    default:
      return state;
  }
};

export default reducer;

import { Reducer } from 'redux';
import { CandidateJobDetailsActionTypes, ICandidateJobDetailsState } from './types';

const INITIAL_STATE: ICandidateJobDetailsState = {
  loadings: {
    getDetails: true,
    saveForm: false,
  },
  dialogs: {
    reply: false,
    messages: false,
  },
  jobDetails: false,
};

const reducer: Reducer<ICandidateJobDetailsState> = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CandidateJobDetailsActionTypes.HANDLE_SET_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          [payload.field]: payload.value,
        },
      };

    case CandidateJobDetailsActionTypes.HANDLE_SET_JOB_DETAILS:
      return {
        ...state,
        jobDetails: payload,
      };

    case CandidateJobDetailsActionTypes.HANDLE_SET_DIALOG:
      return {
        ...state,
        dialogs: {
          ...state.dialogs,
          [payload.field]: payload.value,
        },
      };

    case CandidateJobDetailsActionTypes.HANDLE_CLEAN_MESSAGE:
      return {
        ...state,
        jobDetails: {
          ...state.jobDetails,
          hasCompanyMessage: false,
        },
      };

    default:
      return state;
  }
};

export default reducer;

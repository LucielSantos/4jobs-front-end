import { Reducer } from 'redux';
import { CreateJobActionTypes, ICreateJobState } from './types';

const INITIAL_STATE: ICreateJobState = {
  loadings: {
    page: true,
    save: false,
  },
  dialogs: {
    crateForm: false,
  },
  errorResponse: {
    error: false,
  },
  error: 'await',
};

const reducer: Reducer<ICreateJobState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case CreateJobActionTypes.HANDLE_CREATE_JOB:
      return { ...state, error: 'await' };

    case CreateJobActionTypes.HANDLE_SET_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          [payload.field]: payload.value,
        },
      };

    case CreateJobActionTypes.ON_SET_DIALOG:
      return {
        ...state,
        dialogs: {
          ...state.dialogs,
          [payload.field]: payload.value,
        },
      };

    case CreateJobActionTypes.HANDLE_SET_ERROR_RESPONSE:
      return { ...state, errorResponse: payload, error: 'error' };

    case CreateJobActionTypes.HANDLE_SET_SUCCESS_RESPONSE:
      return { ...state, successResponse: payload, error: 'success' };

    case CreateJobActionTypes.ON_RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default reducer;

import { Reducer } from 'redux';
import { ICreateCandidateState, CreateCandidateActionTypes } from './types';

const INITIAL_STATE: ICreateCandidateState = {
  error: 'await',
  loadings: {
    create: false,
  },
  errorResponse: {
    error: false,
  },
};

const reducer: Reducer<ICreateCandidateState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case CreateCandidateActionTypes.HANDLE_CREATE_CANDIDATE:
      return { ...state, error: 'await' };

    case CreateCandidateActionTypes.HANDLE_SET_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          [payload.field]: payload.value,
        },
      };

    case CreateCandidateActionTypes.HANDLE_SET_ERROR_RESPONSE:
      return { ...state, errorResponse: payload, error: 'error' };

    case CreateCandidateActionTypes.HANDLE_SET_SUCCESS_RESPONSE:
      return { ...state, successResponse: payload, error: 'success' };

    case CreateCandidateActionTypes.HANDLE_RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default reducer;

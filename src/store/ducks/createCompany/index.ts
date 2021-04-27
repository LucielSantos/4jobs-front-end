import { Reducer } from 'redux';
import { ICreateCompanyState, CreateCompanyActionTypes } from './types';

const INITIAL_STATE: ICreateCompanyState = {
  loadings: {
    create: false,
  },
  error: 'await',
  errorResponse: {
    error: false,
  },
};

const reducer: Reducer<ICreateCompanyState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case CreateCompanyActionTypes.HANDLE_CREATE:
      return { ...state, error: 'await' };

    case CreateCompanyActionTypes.HANDLE_SET_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          [payload.field]: payload.value,
        },
      };

    case CreateCompanyActionTypes.HANDLE_SET_ERROR_RESPONSE:
      return { ...state, errorResponse: payload, error: 'error' };

    case CreateCompanyActionTypes.HANDLE_SET_SUCCESS_RESPONSE:
      return { ...state, successResponse: payload, error: 'success' };

    case CreateCompanyActionTypes.HANDLE_RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default reducer;

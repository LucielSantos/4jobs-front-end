import { Reducer } from 'redux';
import { ICreateCompanyState, CreateCompanyActionTypes } from './types';

const INITIAL_STATE: ICreateCompanyState = {
  loadings: {
    create: false,
  },
  errorResponse: {
    error: false,
  },
};

const reducer: Reducer<ICreateCompanyState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case CreateCompanyActionTypes.HANDLE_SET_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          [payload.field]: payload.value,
        },
      };
    case CreateCompanyActionTypes.HANDLE_SET_ERROR_RESPONSE:
      return {
        ...state,
        errorResponse: payload,
      };

    default:
      return state;
  }
};

export default reducer;

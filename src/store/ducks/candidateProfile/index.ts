import { Reducer } from 'redux';
import { CandidateProfileActionTypes, ICandidateProfileState } from './types';

const INITIAL_STATE: ICandidateProfileState = {
  loadings: {
    page: true,
    save: false,
  },
  details: false,
};

const reducer: Reducer<ICandidateProfileState> = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CandidateProfileActionTypes.HANDLE_SET_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          [payload.field]: payload.value,
        },
      };

    case CandidateProfileActionTypes.HANDEL_SET_DETAILS:
      return {
        ...state,
        details: payload,
      };

    default:
      return state;
  }
};

export default reducer;

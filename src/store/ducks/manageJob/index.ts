import { Reducer } from 'redux';
import { ManageJobActionTypes, IManageJobState } from './types';

const INITIAL_STATE: IManageJobState = {
  loadings: {
    loadCandidates: true,
  },
  candidates: {
    answering: [],
    inEvaluation: [],
    registered: [],
    finished: [],
  },
};

const reducer: Reducer<IManageJobState> = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ManageJobActionTypes.HANDLE_SET_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          [payload.field]: payload.value,
        },
      };

    case ManageJobActionTypes.HANDLE_SET_CANDIDATES:
      return {
        ...state,
        candidates: payload,
      };

    default:
      return state;
  }
};

export default reducer;

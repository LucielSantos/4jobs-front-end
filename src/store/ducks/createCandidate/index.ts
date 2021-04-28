import { Reducer } from 'redux';
import { ICreateCandidateState, CreateCandidateActionTypes } from './types';

const INITIAL_STATE: ICreateCandidateState = {
  error: 'await',
  loadings: {
    create: false,
  },
};

const reducer: Reducer<ICreateCandidateState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case CreateCandidateActionTypes.HANDLE_SET_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          [payload.field]: payload.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;

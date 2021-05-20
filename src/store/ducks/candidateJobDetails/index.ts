import { Reducer } from 'redux';
import { CandidateJobDetailsActionTypes, ICandidateJobDetailsState } from './types';

const INITIAL_STATE: ICandidateJobDetailsState = {
  loadings: {
    page: true,
  },
};

const reducer: Reducer<ICandidateJobDetailsState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case CandidateJobDetailsActionTypes.HANDLE_SET_LOADING:
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

import { Reducer } from 'redux';
import { ManageJobActionTypes, IManageJobState } from './types';

const INITIAL_STATE: IManageJobState = {
  loadings: {
    loadCandidates: true,
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

    default:
      return state;
  }
};

export default reducer;

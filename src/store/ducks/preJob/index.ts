import { Reducer } from 'redux';
import { PreJobActionTypes, IPreJobState } from './types';

const INITIAL_STATE: IPreJobState = {
  loadings: {
    page: true,
  },
};

const reducer: Reducer<IPreJobState> = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PreJobActionTypes.HANDLE_SET_LOADING:
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

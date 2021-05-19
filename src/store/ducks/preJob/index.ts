import { Reducer } from 'redux';
import { PreJobActionTypes, IPreJobState } from './types';

const INITIAL_STATE: IPreJobState = {
  loadings: {
    page: true,
  },
  jobPreview: false,
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

    case PreJobActionTypes.HANDLE_SET_JOB_PREVIEW:
      return {
        ...state,
        jobPreview: payload,
      };

    default:
      return state;
  }
};

export default reducer;

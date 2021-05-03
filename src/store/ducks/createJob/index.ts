import { Reducer } from 'redux';
import { CreateJobActionTypes, ICreateJobState } from './types';

const INITIAL_STATE: ICreateJobState = {
  loadings: {
    page: true,
  },
};

const reducer: Reducer<ICreateJobState> = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CreateJobActionTypes.HANDLE_SET_LOADING:
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

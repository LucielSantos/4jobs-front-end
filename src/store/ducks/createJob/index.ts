import { Reducer } from 'redux';
import { CreateJobActionTypes, ICreateJobState } from './types';

const INITIAL_STATE: ICreateJobState = {
  loadings: {
    page: true,
  },
  dialogs: {
    crateForm: false,
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

    case CreateJobActionTypes.ON_SET_DIALOG:
      return {
        ...state,
        dialogs: {
          ...state.dialogs,
          [payload.field]: payload.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;

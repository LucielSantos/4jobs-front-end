import { Reducer } from 'redux';
import { CompanyJobsActionTypes, ICompanyJobsState } from './types';

const INITIAL_STATE: ICompanyJobsState = {
  loadings: {
    loadJobs: true,
  },
  jobs: [],
};

const reducer: Reducer<ICompanyJobsState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case CompanyJobsActionTypes.HANDLE_SET_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          [payload.field]: payload.value,
        },
      };

    case CompanyJobsActionTypes.ON_SET_JOBS:
      return {
        ...state,
        jobs: payload,
      };

    default:
      return state;
  }
};

export default reducer;

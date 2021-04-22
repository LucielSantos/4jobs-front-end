import { Reducer } from 'redux';
import { navbarStates } from '../../../constants';
import { IMainState, MainActionTypes } from './types';

const INITIAL_STATE: IMainState = {
  data: 'data',
  navbar: {
    state: navbarStates.hidden,
  },
};

const reducer: Reducer<IMainState> = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case MainActionTypes.SET_STATE_NAVBAR:
      return {
        ...state,
        navbar: {
          ...state.navbar,
          state: navbarStates[payload],
        },
      };

    default:
      return state;
  }
};

export default reducer;

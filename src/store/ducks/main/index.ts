import { Reducer } from 'redux';
import { defaultNotificationDuration, navbarStates } from '../../../constants';
import { mountNotificationKey } from '../../../utils';
import { IMainState, MainActionTypes } from './types';

const INITIAL_STATE: IMainState = {
  data: 'data',
  navbar: {
    state: navbarStates.hidden,
  },
  notifications: [],
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

    case MainActionTypes.OPEN_NOTIFICATION:
      console.log(payload);

      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            message: payload.message,
            variant: payload.variant,
            key: mountNotificationKey(),
            duration: payload.duration || defaultNotificationDuration,
          },
        ],
      };

    default:
      return state;
  }
};

export default reducer;

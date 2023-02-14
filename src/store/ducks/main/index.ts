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
  loggedUser: false,
  loggedUserType: false,
};

const reducer: Reducer<IMainState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
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

    case MainActionTypes.SET_LOGGED_USER:
      return {
        ...state,
        loggedUserType: payload.userType,
        loggedUser: payload.user,
      };

    default:
      return state;
  }
};

export default reducer;

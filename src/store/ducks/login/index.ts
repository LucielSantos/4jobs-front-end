import { Reducer } from 'redux';
import { ILoginState, LoginActionTypes } from './types';

const INITIAL_STATE: ILoginState = {
  data: {
    login: '',
    password: '',
  },
  loading: false,
  dialogs: {
    chooseSignUpType: false,
  },
};

const reducer: Reducer<ILoginState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case LoginActionTypes.SET_LOADING:
      return {
        ...state,
        loading: payload.value,
      };

    case LoginActionTypes.SET_DIALOG:
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

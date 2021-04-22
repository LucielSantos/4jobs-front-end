import { action } from 'typesafe-actions';
import { MainActionTypes, TSetNavbarState } from './types';

export const onSetNavbarState = (state: TSetNavbarState) =>
  action(MainActionTypes.SET_STATE_NAVBAR, state);

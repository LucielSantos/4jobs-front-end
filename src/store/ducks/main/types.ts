import { VariantType } from 'notistack';
import { navbarStates } from '../../../constants';

// Action types
export const MainActionTypes = {
  SET_STATE_NAVBAR: '@main/SET_STATE_NAVBAR',
  OPEN_NOTIFICATION: '@main/OPEN_NOTIFICATION',
};

// Data types...
export type TSetNavbarState = keyof typeof navbarStates;

export interface INavbar {
  state: number;
}

export type TNotificationVariant = VariantType;

export interface INotificationState {
  message: string;
  variant: TNotificationVariant;
  key: number;
  duration: number;
}

// State type
export interface IMainState {
  data: string;
  navbar: INavbar;
  notifications: INotificationState[];
}

import { navbarStates } from '../../../constants';

// Action types
export const MainActionTypes = {
  SET_STATE_NAVBAR: '@main/SET_STATE_NAVBAR',
};

// Data types...
export type TSetNavbarState = keyof typeof navbarStates;

export interface INavbar {
  state: number;
}

// State type
export interface IMainState {
  data: string;
  navbar: INavbar;
}

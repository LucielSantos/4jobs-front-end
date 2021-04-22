import Login from '../pages/Login';
import CreateCompany from '../pages/CreateCompany';
import { IPrivateRoute, IPublicRoute } from './components';
import { TNavbarStatesKeys } from '../constants';

export const routePaths = {
  MAIN: '/',
  LOGIN: '/login',
  CREATE_COMPANY: '/createCompany',
};

export type ITNavbarStateByRoute = {
  // eslint-disable-next-line
  [key: string]: TNavbarStatesKeys;
};

export const navbarStateByRoute: ITNavbarStateByRoute = {
  default: 'hidden',
  [routePaths.LOGIN]: 'hidden',
  [routePaths.CREATE_COMPANY]: 'simple',
};

export const publicRoutes: IPublicRoute[] = [
  {
    path: routePaths.LOGIN,
    component: Login,
  },
  {
    component: CreateCompany,
    path: routePaths.CREATE_COMPANY,
  },
];

export const privateRoutes: IPrivateRoute[] = [];

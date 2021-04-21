import Login from '../pages/Login';
import CreateCompany from '../pages/CreateCompany';
import { IPrivateRoute, IPublicRoute } from './components';

export const routePaths = {
  MAIN: '/',
  LOGIN: '/login',
  CREATE_COMPANY: '/createCompany',
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

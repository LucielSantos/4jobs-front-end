import Login from '../pages/Login';
import CreateCompany from '../pages/CreateCompany';
import { CompanyJobs } from '../pages/CompanyJobs';
import { IPrivateRoute, IPublicRoute } from './components';
import { TNavbarStatesKeys, userType } from '../constants';

export const routePaths = {
  MAIN: '/',
  LOGIN: '/login',
  CREATE_COMPANY: '/createCompany',
  COMPANY_JOBS: '/company/jobs',
};

export type ITNavbarStateByRoute = {
  // eslint-disable-next-line
  [key: string]: TNavbarStatesKeys;
};

export const navbarStateByRoute: ITNavbarStateByRoute = {
  default: 'hidden',
  [routePaths.LOGIN]: 'hidden',
  [routePaths.CREATE_COMPANY]: 'simple',
  [routePaths.COMPANY_JOBS]: 'simple',
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

export const privateRoutes: IPrivateRoute[] = [
  {
    component: CompanyJobs,
    path: routePaths.COMPANY_JOBS,
    userType: userType.company,
  },
];

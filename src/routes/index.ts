import Login from '../pages/Login';
import CreateCompany from '../pages/CreateCompany';
import CompanyJobs from '../pages/CompanyJobs';
import CreateJob from '../pages/CreateJob';
import CandidateJobs from '../pages/CandidateJobs';
import { IPrivateRoute, IPublicRoute } from './components';
import { TNavbarStatesKeys, TUserTypeNum, userTypes } from '../constants';
import { IIconProps } from '../assets/icons';

export const routePaths = {
  MAIN: '/',
  LOGIN: '/login',
  CREATE_COMPANY: '/createCompany',
  COMPANY_JOBS: '/company/jobs',
  CANDIDATE_JOBS: '/candidate/jobs',
  CREATE_JOB: '/company/createJob',
};

export type ITNavbarStateByRoute = {
  // eslint-disable-next-line
  [key: string]: TNavbarStatesKeys;
};

export type ISidebarRoutesData = {
  icon: IIconProps['name'];
  route: string;
};

export type ISidebarRoutes = {
  // eslint-disable-next-line
  [key in TUserTypeNum]: ISidebarRoutesData[];
};

export const navbarStateByRoute: ITNavbarStateByRoute = {
  default: 'hidden',
  [routePaths.LOGIN]: 'hidden',
  [routePaths.CREATE_COMPANY]: 'simple',
  [routePaths.COMPANY_JOBS]: 'company',
  [routePaths.CANDIDATE_JOBS]: 'candidate',
  [routePaths.CREATE_JOB]: 'company',
};

export const sidebarRoutes: ISidebarRoutes = {
  '1': [
    {
      icon: 'light',
      route: routePaths.COMPANY_JOBS,
    },
  ],
  '2': [
    {
      icon: 'light',
      route: routePaths.CANDIDATE_JOBS,
    },
  ],
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
    userType: userTypes.company,
  },
  {
    component: CandidateJobs,
    path: routePaths.CANDIDATE_JOBS,
    userType: userTypes.candidate,
  },
  {
    component: CreateJob,
    path: routePaths.CREATE_JOB,
    userType: userTypes.company,
  },
];

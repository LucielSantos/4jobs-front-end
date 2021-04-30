import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { TUserTypeNum } from '../../../constants';
import { isAuthenticated } from '../../../utils';

export interface IPrivateRoute {
  exact?: RouteProps['exact'];
  component: RouteProps['component'];
  path: RouteProps['path'];
  userType: TUserTypeNum;
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({
  exact = true,
  userType,
  ...props
}) =>
  isAuthenticated(userType) ? (
    <Route exact={exact} {...props} />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );

import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isAuthenticated } from '../../../utils';

export interface IPrivateRoute {
  exact?: RouteProps['exact'];
  component: RouteProps['component'];
  path: RouteProps['path'];
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({
  component,
  exact = true,
  ...props
}) =>
  isAuthenticated() ? (
    <Route exact={exact} {...props} />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );

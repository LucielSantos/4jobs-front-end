import { TUserTypeNum } from '../constants';
import { getUserToken, getUserType } from './storage';

export const isAuthenticated = (userType: TUserTypeNum): boolean => {
  const token = getUserToken();
  const storageUserType = getUserType();

  if (!token) return false;

  if (userType !== storageUserType) return false;

  return true;
};

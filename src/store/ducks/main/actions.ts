import { action } from 'typesafe-actions';
import { TUserTypeNum } from '../../../constants';
import { ISuccessCreateCandidateData } from '../createCandidate/types';
import { ISuccessCreateCompanyData } from '../createCompany/types';
import { MainActionTypes, TNotificationVariant, TSetNavbarState } from './types';

export const onSetNavbarState = (state: TSetNavbarState) =>
  action(MainActionTypes.SET_STATE_NAVBAR, state);

export const handleOpenNotification = (
  message: string,
  variant: TNotificationVariant = 'success',
  duration?: number
) => action(MainActionTypes.OPEN_NOTIFICATION, { message, variant, duration });

export const onSetLoggedUser = (
  user: ISuccessCreateCandidateData | ISuccessCreateCompanyData | false,
  userType: TUserTypeNum | false
) => action(MainActionTypes.SET_LOGGED_USER, { user, userType });

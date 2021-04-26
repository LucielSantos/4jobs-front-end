import { action } from 'typesafe-actions';
import { MainActionTypes, TNotificationVariant, TSetNavbarState } from './types';

export const onSetNavbarState = (state: TSetNavbarState) =>
  action(MainActionTypes.SET_STATE_NAVBAR, state);

export const handleOpenNotification = (
  message: string,
  variant: TNotificationVariant = 'success',
  duration?: number
) => action(MainActionTypes.OPEN_NOTIFICATION, { message, variant, duration });

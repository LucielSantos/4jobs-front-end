import store from '../store';
import { handleOpenNotification } from '../store/ducks/main/actions';

export const mountNotificationKey = (): number =>
  new Date().getTime() + Math.random();

export const openNotification: typeof handleOpenNotification = (...props) =>
  store.dispatch(handleOpenNotification(...props));

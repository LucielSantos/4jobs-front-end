import { action } from 'typesafe-actions';
import { PreJobActionTypes } from './types';

export const onLoadPage = () => action(PreJobActionTypes.ON_LOAD_PAGE);

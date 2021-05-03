import { action } from 'typesafe-actions';
import { CreateJobActionTypes } from './types';

export const onLoadPage = () => action(CreateJobActionTypes.ON_LOAD_PAGE);

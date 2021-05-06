import { action } from 'typesafe-actions';
import { CreateJobActionTypes, ISetDialogParam } from './types';

export const onLoadPage = () => action(CreateJobActionTypes.ON_LOAD_PAGE);

export const onSetDialog = (
  field: ISetDialogParam['field'],
  value: ISetDialogParam['value']
) => action(CreateJobActionTypes.ON_SET_DIALOG, { field, value });

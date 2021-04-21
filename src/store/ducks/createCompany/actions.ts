import { action } from 'typesafe-actions';
import {
  CreateCompanyActionTypes,
  ICreateCompanyData,
  ICreateCompanySetLoading,
} from './types';

export const handleCreateCompany = (data: ICreateCompanyData) =>
  action(CreateCompanyActionTypes.HANDLE_CREATE, data);

export const onSetCompanyLoading = (
  field: ICreateCompanySetLoading['field'],
  value: ICreateCompanySetLoading['value']
) => action(CreateCompanyActionTypes.HANDLE_SET_LOADING, { field, value });

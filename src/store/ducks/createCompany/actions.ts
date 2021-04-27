import { action } from 'typesafe-actions';
import { IReturnGetErrorResponse } from '../../../services/config/getError';
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

export const onSetErrorResponse = (data: IReturnGetErrorResponse) =>
  action(CreateCompanyActionTypes.HANDLE_SET_ERROR_RESPONSE, data);

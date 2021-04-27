import { IReturnGetErrorResponse } from '../../../services/config/getError';
import { TErrorControlState } from '../types';

// Action types
export const CreateCompanyActionTypes = {
  HANDLE_CREATE: '@createCompany/HANDLE_CREATE',
  HANDLE_SET_LOADING: '@createCompany/HANDLE_SET_LOADING',
  HANDLE_SET_ERROR_RESPONSE: '@createCompany/HANDLE_SET_ERROR_RESPONSE',
  HANDLE_SET_SUCCESS_RESPONSE: '@createCompany/HANDLE_SET_SUCCESS_RESPONSE',
  HANDLE_RESET_STATE: '@createCompany/HANDLE_RESET_STATE',
};

// Data types
export interface ICreateCompanyData {
  name: string;
  responsible: string;
  description: string;
  marketSegment: string;
  cnpj: string;
  state: string;
  city: string;
  email: string;
  phone: string;
  password: string;
  profileImage: string;
}

export interface ISuccessCreateCompanyData extends ICreateCompanyData {
  id: string;
}
export interface ICreateCompanySetLoading {
  field: keyof ICreateCompanyLoadings;
  value: boolean;
}

export interface ICreateCompanyLoadings {
  create: boolean;
}

// State type
export interface ICreateCompanyState {
  loadings: ICreateCompanyLoadings;
  errorResponse: IReturnGetErrorResponse;
  successResponse?: ISuccessCreateCompanyData;
  error: TErrorControlState;
}

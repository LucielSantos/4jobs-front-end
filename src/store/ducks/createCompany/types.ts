// Action types
export const CreateCompanyActionTypes = {
  HANDLE_CREATE: '@createCompany/HANDLE_CREATE',
  HANDLE_SET_LOADING: '@createCompany/HANDLE_SET_LOADING',
};

// Data types
export interface ICreateCompanyData {
  name: string;
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
}

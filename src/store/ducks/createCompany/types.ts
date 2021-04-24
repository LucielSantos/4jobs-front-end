// Action types
export const CreateCompanyActionTypes = {
  HANDLE_CREATE: '@createCompany/HANDLE_CREATE',
  HANDLE_SET_LOADING: '@createCompany/HANDLE_SET_LOADING',
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

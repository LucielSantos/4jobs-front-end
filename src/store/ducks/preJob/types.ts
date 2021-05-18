// Action types
export const PreJobActionTypes = {
  HANDLE_SET_LOADING: '@preJob/HANDLE_SET_LOADING',
  ON_LOAD_PAGE: '@preJob/ON_LOAD_PAGE',
};

// Data types
export interface IPreJobLoadings {
  page: boolean;
}

// State types
export interface IPreJobState {
  loadings: IPreJobLoadings;
}

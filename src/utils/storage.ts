import { prefixStorage, TStorageTypes, TUserTypeNum } from '../constants';
import { ICandidateData } from '../store/ducks/createCandidate/types';
import { ICompanyData } from '../store/ducks/createCompany/types';

export const setStorageItem = (storage: TStorageTypes, key: string, value: any) =>
  storage === 'local'
    ? localStorage.setItem(`${prefixStorage}${key}`, JSON.stringify(value))
    : sessionStorage.setItem(`${prefixStorage}${key}`, JSON.stringify(value));

export const getStorageItem = <T>(storage: TStorageTypes, key: string): T | null => {
  if (storage === 'local') {
    const value = localStorage.getItem(`${prefixStorage}${key}`);

    if (value) {
      return JSON.parse(value);
    }

    return null;
  }

  if (storage === 'session') {
    const value = sessionStorage.getItem(`${prefixStorage}${key}`);

    if (value) {
      return JSON.parse(value);
    }

    return null;
  }

  return null;
};

export const clearStorage = (): void => {
  localStorage.clear();
  sessionStorage.clear();
};

export const getLoggedUser = (): ICandidateData | ICompanyData | null =>
  getStorageItem<ICandidateData | ICompanyData>('local', 'user') ||
  getStorageItem<ICandidateData | ICompanyData>('session', 'user');

export const getUserToken = (): string | null =>
  getStorageItem<string>('local', 'token') || getStorageItem<string>('session', 'token');

export const getUserType = (): TUserTypeNum | null =>
  getStorageItem<TUserTypeNum>('local', 'userType') ||
  getStorageItem<TUserTypeNum>('session', 'userType');

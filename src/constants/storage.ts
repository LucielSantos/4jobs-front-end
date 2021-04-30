export type TStorageTypes = 'local' | 'session';

export const prefixStorage = '@4hjobs/';

export interface IStorageObj {
  local: TStorageTypes;
  session: TStorageTypes;
}

export const storage: IStorageObj = {
  local: 'local',
  session: 'session',
};

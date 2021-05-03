/** 1: company; 2: candidate  */
export type TUserTypeNum = 1 | 2;

export interface IUserType {
  company: TUserTypeNum;
  candidate: TUserTypeNum;
}

export const userTypes: IUserType = {
  company: 1,
  candidate: 2,
};

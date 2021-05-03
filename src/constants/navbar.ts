export type TNavbarStatesKeys = 'hidden' | 'simple' | 'candidate' | 'company';

export type TNavbarStates = {
  // eslint-disable-next-line
  [key in TNavbarStatesKeys]: number;
};

export const navbarStates: TNavbarStates = {
  hidden: 0,
  simple: 1,
  candidate: 2,
  company: 3,
};

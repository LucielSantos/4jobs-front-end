import { parse } from 'query-string';

export const querySearchParse = <T>() => (parse(location.search) as unknown) as T;

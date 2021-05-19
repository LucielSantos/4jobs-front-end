import { parse, stringify } from 'query-string';

export const querySearchParse = <T>() => (parse(location.search) as unknown) as T;

export const queryStringify = (
  obj: Record<string, any>,
  notAddQuestionMark = true
): string => `${notAddQuestionMark && '?'}${stringify(obj)}`;

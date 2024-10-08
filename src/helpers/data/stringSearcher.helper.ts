import { stringConvertor } from "./stringConvertor.helper";

export const stringSearcher = (
  searchString: string,
  value: string,
  strictMode = false,
): boolean => {
  if (strictMode) return value.includes(searchString);
  return stringConvertor(value).includes(stringConvertor(searchString));
};

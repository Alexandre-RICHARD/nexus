export const SearchHelper = {
  stringConvertor: (string: string): string => {
    return string.toLowerCase();
  },

  searcher: (searchString: string, value: string): boolean => {
    return SearchHelper.stringConvertor(value).includes(
      SearchHelper.stringConvertor(searchString),
    );
  },
};

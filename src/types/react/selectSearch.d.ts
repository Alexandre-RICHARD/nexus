export type SelectSearchType =
  | {
      isHandlingCustomSearch: true;
      searchString: string;
      onChangeSearch: (searchString: string) => void;
    }
  | {
      isHandlingCustomSearch: false;
      searchString?: undefined;
      onChangeSearch?: undefined;
    };

import type React from "react";

export type SelectItemsType<T extends string = string> = {
  value: T;
  search: string;
  label: string | React.JSX.Element;
};

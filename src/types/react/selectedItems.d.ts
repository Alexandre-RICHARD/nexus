import type React from "react";

export type SelectItemsType<T extends string = string> = {
  value: T;
  // TODO Devrait être optionnel si label est de type string
  search: string;
  label: string | React.JSX.Element;
};

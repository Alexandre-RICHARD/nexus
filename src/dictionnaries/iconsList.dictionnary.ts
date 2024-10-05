import type React from "react";

import { IconTokenEnum } from "../enums/iconToken.enum";
import { DropdownArrow } from "../react/icons/DropdownArrow";
import { TriangleArrow } from "../react/icons/TriangleArrow";

export const IconsList: Record<
  IconTokenEnum,
  React.JSXElementConstructor<{
    style: React.CSSProperties;
  }>
> = {
  [IconTokenEnum.DropdownArrow]: DropdownArrow,
  [IconTokenEnum.TriangleArrow]: TriangleArrow,
};

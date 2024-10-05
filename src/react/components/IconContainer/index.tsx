import React from "react";

import { IconsList } from "../../../dictionnaries/iconsList.dictionnary";
import type { IconTokenEnum } from "../../../enums/iconToken.enum";

type PropsType = {
  iconToken: IconTokenEnum;
  size: string;
  color?: string;
};

export const IconContainer = ({
  iconToken,
  size,
  color,
}: PropsType): React.JSX.Element => {
  const Icon = IconsList[iconToken];
  return <Icon style={{ color, width: size, height: size }} />;
};

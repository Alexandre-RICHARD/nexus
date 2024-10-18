import type React from "react";

import { themeApplicator } from "../../../helpers/theme/themeApplicator";

type PropsType = {
  theme: Record<string, string>;
  children: React.JSX.Element;
};

export const ThemeProvider = ({
  children,
  theme,
}: PropsType): React.JSX.Element => {
  themeApplicator(theme);

  return children;
};

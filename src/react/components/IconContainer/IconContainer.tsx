import "./IconContainer.scss";

import React from "react";

type PropsType = {
  children: React.JSX.Element;
  size: string;
  margin?: string;
  color?: string;
};

export const IconContainer = ({
  children,
  size,
  margin,
  color,
}: PropsType): React.JSX.Element => {
  return (
    <div
      style={{ width: size, height: size, margin, fill: color }}
      className="icon-container"
    >
      {children}
    </div>
  );
};

import "./IconContainer.scss";

import React from "react";

type PropsTypes = {
  children: React.ReactElement;
  size: string;
  margin?: string;
  color?: string;
};

export const IconContainer = ({
  children,
  size,
  margin,
  color,
}: PropsTypes): React.ReactElement => {
  return (
    <div
      style={{ width: size, height: size, margin, fill: color }}
      className="icon-container"
    >
      {children}
    </div>
  );
};

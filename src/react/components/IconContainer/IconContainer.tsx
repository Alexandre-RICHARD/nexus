import "./IconContainer.scss";

import React from "react";

type PropsTypes = {
  children: React.ReactElement;
  size: string;
  margin?: string;
};

export const IconContainer = ({
  children,
  size,
  margin,
}: PropsTypes): React.ReactElement => {
  return (
    <div
      style={{ width: size, height: size, margin }}
      className="icon-container"
    >
      {children}
    </div>
  );
};

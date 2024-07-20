import "./LabelWithIcon.scss";

import React from "react";

import { IconContainer } from "../IconContainer/IconContainer";

type PropsType = {
  icon: React.JSX.Element;
  label: React.JSX.Element;
};

export const LabelWithIcon = ({
  icon,
  label,
}: PropsType): React.JSX.Element => {
  return (
    <div className="label-with-left-icon">
      <IconContainer size="25px">{icon}</IconContainer>
      <div className="label-container">{label}</div>
    </div>
  );
};

import "./LabelWithIcon.scss";

import React from "react";

import { IconContainer } from "../IconContainer/IconContainer";

type PropsTypes = {
  icon: React.ReactElement;
  label: React.ReactElement;
};

export const LabelWithIcon = ({
  icon,
  label,
}: PropsTypes): React.ReactElement => {
  return (
    <div className="label-with-left-icon">
      <IconContainer size="25px">{icon}</IconContainer>
      <div className="label-container">{label}</div>
    </div>
  );
};

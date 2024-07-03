import "./LabelWithIcon.scss";

import React from "react";

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
      <div className="icon-container">{icon}</div>
      <div className="label-container">{label}</div>
    </div>
  );
};

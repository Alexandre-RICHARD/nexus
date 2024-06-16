import "./DropdownItemWithIcon.scss";

import React from "react";

interface PropsTypes {
  icon: React.ReactElement;
  label: React.ReactElement;
}

export const DropdownItemWithIcon = ({
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

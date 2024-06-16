import "./ButtonSelect.scss";

import React from "react";

interface PropsTypes {
  id: string;
  label: string;
  onClick: () => void;
}

export const ButtonSelect = ({
  id,
  label,
  onClick,
}: PropsTypes): React.ReactElement => {
  return (
    <button
      id={id}
      type="button"
      className="button-select"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

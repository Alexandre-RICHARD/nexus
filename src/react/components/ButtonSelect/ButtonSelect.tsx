import "./ButtonSelect.scss";

import React from "react";

interface PropsTypes {
  selectorId: string;
  label: string;
  onClick: () => void;
}

export const ButtonSelect = ({
  selectorId,
  label,
  onClick,
}: PropsTypes): React.ReactElement => {
  return (
    <button
      id={selectorId}
      type="button"
      className="button-select"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

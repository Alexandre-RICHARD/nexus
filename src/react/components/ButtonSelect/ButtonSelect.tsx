import "./ButtonSelect.scss";

import React from "react";

import { DropdownArrow } from "../../icons/DropdownArrow";
import { IconContainer } from "../IconContainer/IconContainer";

type PropsTypes = {
  selectorId: string;
  label: string | React.ReactElement;
  onClick: () => void;
};

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
      <IconContainer
        size="15px"
        margin="0 0 0 6px"
      >
        <DropdownArrow color="#ffffff" />
      </IconContainer>
    </button>
  );
};

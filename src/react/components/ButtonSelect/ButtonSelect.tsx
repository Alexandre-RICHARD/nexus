import "./ButtonSelect.scss";

import React from "react";

import { DropdownArrow } from "../../icons/DropdownArrow";
import { IconContainer } from "../IconContainer/IconContainer";

type PropsType = {
  selectorId: string;
  label: string | React.JSX.Element;
  onClick: () => void;
};

export const ButtonSelect = ({
  selectorId,
  label,
  onClick,
}: PropsType): React.JSX.Element => {
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
        color="#ffffff"
      >
        <DropdownArrow />
      </IconContainer>
    </button>
  );
};

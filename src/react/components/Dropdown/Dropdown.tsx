import "./Dropdown.scss";

import React, { useEffect, useState } from "react";

import type { DropdownPosition } from "../../../types/react/dropdownPosition";
import type { SelectItemsTypes } from "../../../types/react/selectedItems";

type PropsTypes = {
  selectorId: string;
  items: SelectItemsTypes[];
  selectedItem: string;
  position: DropdownPosition;
  onSelect: (selectedItem: string) => void;
  onClose: () => void;
};

const isTop = (position: string) => {
  return ["top-left", "top-right"].indexOf(position) >= 0;
};

const isLeft = (position: string) => {
  return ["bottom-left", "top-left"].indexOf(position) >= 0;
};

export const Dropdown = ({
  selectorId,
  items,
  selectedItem,
  position,
  onSelect,
  onClose,
}: PropsTypes): React.ReactElement => {
  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSelect(event.currentTarget.value);
    onClose();
  };

  const dropdownId = `${selectorId}-dropdown-container`;

  useEffect(() => {
    const handleAllClick = (event: MouseEvent) => {
      const dropdown = document.getElementById(dropdownId);
      const selectorButton = document.getElementById(selectorId);
      if (
        !dropdown?.contains(event.target as Node) &&
        !selectorButton?.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("click", handleAllClick);
    return () => document.removeEventListener("click", handleAllClick);
  }, [dropdownId, selectorId, onClose]);

  const [selectorButtonHeight, setSelectorButtonHeight] = useState(0);
  const [dropdownverticalPosition, setDropdownverticalPosition] =
    useState<string>();
  useEffect(() => {
    const selectorButton = document.getElementById(selectorId);
    const pageHeigth = window.innerHeight;
    const selectorButtonScrollY = selectorButton?.getBoundingClientRect().top;
    const size = Math.min(250, items.length * 32 + 16);

    if (
      (isTop(position) && (selectorButtonScrollY ?? 0) <= size + 15) ||
      (!isTop(position) &&
        pageHeigth -
          (selectorButtonScrollY ?? 0) -
          (selectorButton?.offsetHeight ?? 0) <=
          size + 15)
    ) {
      setDropdownverticalPosition(isTop(position) ? "top" : "bottom");
    } else {
      setDropdownverticalPosition(isTop(position) ? "bottom" : "top");
    }

    setSelectorButtonHeight(selectorButton?.offsetHeight ?? 0);
  }, [items, position, selectorId]);

  return (
    <ul
      id={dropdownId}
      style={{
        [`${dropdownverticalPosition}`]: `${selectorButtonHeight + 5}px`,
        [isLeft(position) ? "right" : "left"]: 0,
      }}
      className="select-items"
    >
      {items.map((item, index) => (
        <button
          key={item.value || index}
          type="button"
          className={`select-item ${selectedItem === item.value ? "selected-item" : ""}`}
          onClick={(event) => handleChange(event)}
          value={item.value}
        >
          {item.label}
        </button>
      ))}
    </ul>
  );
};

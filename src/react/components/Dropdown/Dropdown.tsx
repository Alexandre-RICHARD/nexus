import "./Dropdown.scss";

import React, { useEffect } from "react";

import type { SelectItemsTypes } from "../../../types/react/selectedItems";

type PropsTypes = {
  selectorId: string;
  onClose: () => void;
  onSelect: (selectedItem: string) => void;
  items: SelectItemsTypes[];
};

export const Dropdown = ({
  selectorId,
  onClose,
  onSelect,
  items,
}: PropsTypes): React.ReactElement => {
  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSelect(event.currentTarget.value);
    onClose();
  };

  const dropddownId = `${selectorId}-dropdown-container`;

  // TODO Changer la disposition pour que le dropdown apparaissent au bon endroit, à partir d'une props, left-cornder, right-corbern middle et ensuite déterminé automatiquement au dessus ou en dessous

  useEffect(() => {
    const handleAllClick = (event: MouseEvent) => {
      const selector = document.querySelector(`.${dropddownId}`);
      const openSelectorButton = document.getElementById(selectorId);
      if (
        !selector?.contains(event.target as Node) &&
        !openSelectorButton?.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleAllClick);
    return () => document.removeEventListener("click", handleAllClick);
  }, [dropddownId, selectorId, onClose]);

  return (
    <div className={dropddownId}>
      <ul className="select-items">
        {items.map((item, index) => (
          <button
            key={item.value || index}
            type="button"
            className="select-item"
            onClick={(event) => handleChange(event)}
            value={item.value}
          >
            {item.label}
          </button>
        ))}
      </ul>
    </div>
  );
};

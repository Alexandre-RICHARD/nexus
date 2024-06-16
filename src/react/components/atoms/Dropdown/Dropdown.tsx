import "./Dropdown.scss";

import React, { useEffect } from "react";

import type { SelectItems } from "../../../../types/react/selectedItems";

interface PropsTypes {
  id: string;
  onClose: () => void;
  onSelect: (selectedItem: string) => void;
  items: SelectItems[];
}

export const Dropdown = ({
  id,
  onClose,
  onSelect,
  items,
}: PropsTypes): React.ReactElement => {
  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSelect(event.currentTarget.value);
    onClose();
  };

  useEffect(() => {
    const handleAllClick = (event: MouseEvent) => {
      const selector = document.querySelector(".dropdown-container");
      const openSelectorButton = document.getElementById(id);
      if (
        !selector?.contains(event.target as Node) &&
        !openSelectorButton?.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleAllClick);
    return () => document.removeEventListener("click", handleAllClick);
  }, [id, onClose]);

  return (
    <div className="dropdown-container">
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

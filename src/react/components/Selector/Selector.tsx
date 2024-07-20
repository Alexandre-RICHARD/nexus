import "./Selector.scss";

import React, { useState } from "react";

import type { DropdownPositionType } from "../../../types/react/dropdownPosition";
import type { SelectItemsType } from "../../../types/react/selectedItems";
import { ButtonSelect } from "../ButtonSelect/ButtonSelect";
import { Dropdown } from "../Dropdown/Dropdown";

type PropsType = {
  id: string;
  label: string | React.JSX.Element;
  items: SelectItemsType[];
  selectedItem: string;
  position: DropdownPositionType;
  onSelect: (item: string) => void;
};

export const Selector = ({
  id,
  label,
  items,
  selectedItem,
  position,
  onSelect,
}: PropsType): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectorId = `selector-${id}`;

  return (
    <div className="selector">
      <ButtonSelect
        selectorId={selectorId}
        label={label}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <Dropdown
          selectorId={selectorId}
          items={items}
          selectedItem={selectedItem}
          position={position}
          onSelect={(item) => onSelect(item)}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

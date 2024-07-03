import React, { useState } from "react";

import type { DropdownPosition } from "../../../types/react/dropdownPosition";
import type { SelectItemsTypes } from "../../../types/react/selectedItems";
import { ButtonSelect } from "../ButtonSelect/ButtonSelect";
import { Dropdown } from "../Dropdown/Dropdown";

type PropsTypes = {
  id: string;
  label: string | React.ReactElement;
  items: SelectItemsTypes[];
  selectedItem: string;
  position: DropdownPosition;
  onSelect: (item: string) => void;
};

export const Selector = ({
  id,
  label,
  items,
  selectedItem,
  position,
  onSelect,
}: PropsTypes): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectorId = `selector-${id}`;

  return (
    <div>
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

import React, { useState } from "react";

import type { SelectItemsTypes } from "../../../types/react/selectedItems";
import { ButtonSelect } from "../ButtonSelect/ButtonSelect";
import { Dropdown } from "../Dropdown/Dropdown";

type PropsTypes = {
  id: string;
  label: string | React.ReactElement;
  items: SelectItemsTypes[];
  onSelect: (item: string) => void;
};

export const Selector = ({
  id,
  label,
  items,
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
          onClose={() => setIsOpen(false)}
          onSelect={(item) => onSelect(item)}
        />
      )}
    </div>
  );
};

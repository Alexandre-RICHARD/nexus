import "./Selector.scss";

import React, { useState } from "react";

import type { SelectItems } from "../../../../types/react/selectedItems";
import { ButtonSelect } from "../../atoms/ButtonSelect/ButtonSelect";
import { Dropdown } from "../../atoms/Dropdown/Dropdown";

interface PropsTypes {
  id: string;
  items: SelectItems[];
  onSelect: (item: string) => void;
}

export const Selector = ({
  id,
  items,
  onSelect,
}: PropsTypes): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectorId = `selector-${id}`;

  return (
    <div className="selector">
      <ButtonSelect
        id={selectorId}
        label="Fl"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <Dropdown
          id={selectorId}
          items={items}
          onClose={() => setIsOpen(false)}
          onSelect={(item) => onSelect(item)}
        />
      )}
    </div>
  );
};

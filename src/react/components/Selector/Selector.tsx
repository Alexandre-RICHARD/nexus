import React, { useState } from "react";

import type { SelectItemsTypes } from "../../../types/react/selectedItems";
import { ButtonSelect } from "../ButtonSelect/ButtonSelect";
import { Dropdown } from "../Dropdown/Dropdown";

type PropsTypes = {
  id: string;
  items: SelectItemsTypes[];
  onSelect: (item: string) => void;
};

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
        selectorId={selectorId}
        // TODO Changer le label et rajouter icone de dropdown
        label="Fl"
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

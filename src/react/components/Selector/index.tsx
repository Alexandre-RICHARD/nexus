import React, { useState } from "react";

import type { DropdownPositionType } from "../../../types/react/dropdownPosition";
import type { SelectItemsType } from "../../../types/react/selectedItems";
import type { SelectSearchType } from "../../../types/react/selectSearch";
import { ButtonSelect } from "../ButtonSelect";
import { Dropdown } from "../Dropdown";
import styles from "./styles.module.scss";

type PropsType = {
  id: string;
  label: string | React.JSX.Element;
  items: SelectItemsType[];
  selectedItem?: string;
  position: DropdownPositionType;
  onSelect: (item: string) => void;
  search?: SelectSearchType;
};

export const Selector = ({
  id,
  label,
  items,
  selectedItem,
  position,
  onSelect,
  search,
}: PropsType): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectorId = `selector-${id}`;

  return (
    <div className={styles.selector}>
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
          search={search}
        />
      )}
    </div>
  );
};

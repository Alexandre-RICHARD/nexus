import React from "react";

import { IconContainer } from "../IconContainer/IconContainer";
import styles from "./LabelWithIcon.module.scss";

type PropsType = {
  icon: React.JSX.Element;
  label: React.JSX.Element;
};

export const LabelWithIcon = ({
  icon,
  label,
}: PropsType): React.JSX.Element => {
  return (
    <div className={styles.label_with_left_icon}>
      <IconContainer size="25px">{icon}</IconContainer>
      <div className={styles.label_container}>{label}</div>
    </div>
  );
};

import React from "react";

import { IconContainer } from "../IconContainer";
import styles from "./styles.module.scss";

type PropsType = {
  icon: React.JSX.Element;
  label: React.JSX.Element;
  position: "left" | "right";
};

export const LabelWithIcon = ({
  icon,
  label,
  position,
}: PropsType): React.JSX.Element => {
  return (
    <div className={styles.label_with_icon}>
      {position === "left" && <IconContainer size="25px">{icon}</IconContainer>}
      <div className={styles.label_container}>{label}</div>
      {position === "right" && (
        <IconContainer size="25px">{icon}</IconContainer>
      )}
    </div>
  );
};

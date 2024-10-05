import React from "react";

type Props = {
  styles: React.CSSProperties;
};

export const TriangleArrow = ({ styles }: Props): React.JSX.Element => {
  return (
    <svg
      style={styles}
      viewBox="0 0 88.104 79.908"
    >
      <path d="M 44.052 0 L 88.104 79.908 L 0 79.908 L 44.052 0 Z" />
    </svg>
  );
};

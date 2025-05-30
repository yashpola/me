import { CSSProperties, MouseEventHandler } from "react";
import { defaultTopicChipStyle } from "../../utils/constants/ComponentConstants";

export default function Chip({
  children,
  id,
  style,
  onClick,
}: {
  children: string;
  id?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler;
}) {
  return (
    <p
      id={id}
      style={{
        ...defaultTopicChipStyle,
        display: "inline-flex",
        borderRadius: "10px",
        padding: "5px",
        marginRight: "5px",
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </p>
  );
}

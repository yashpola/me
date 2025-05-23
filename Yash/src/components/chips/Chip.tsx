import { CSSProperties, MouseEventHandler } from "react";

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
        backgroundColor: "white",
        color: "black",
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

import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function LinkedComponent({
  to,
  children,
}: {
  to: any;
  children: ReactElement;
}) {
  return <Link to={to}>{children}</Link>;
}

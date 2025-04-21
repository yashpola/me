import { ReactElement } from "react";

export default function Grid({ children }: { children: ReactElement[] }) {
  return <div className="grid">{children}</div>;
}

import { ReactElement } from "react";

export default function Caption({children, style}: {children: ReactElement, style?: {}}) {
    return <div style={{fontSize: "13px", ...style}}>{children}</div>
}
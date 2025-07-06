import { ReactElement } from "react";

export default function FlexColumn({children, style}: {children: ReactElement[], style?: {}}) {
    return <div style={{display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center", ...style}}>{children}</div>
}
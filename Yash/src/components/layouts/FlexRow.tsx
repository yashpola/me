import { ReactElement } from "react";

export default function FlexRow({children, style}: {children: ReactElement[], style?: {}}) {
    return <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", ...style}}>{children}</div>
}
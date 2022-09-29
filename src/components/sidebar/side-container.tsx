import React from "react";
import "../../styles/side-container.scss";

export function SideContainer({ children }: { children: any }) {
  return <div className="side-container">{children}</div>;
}

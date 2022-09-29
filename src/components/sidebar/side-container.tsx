import React from "react";
import "../../styles/side-container.scss";

function SideContainer({
  children,
  open = true,
}: {
  children: any;
  open: boolean;
}) {
  return (
    <div className={open ? "side-container--expanded" : "side-container"}>
      {children}
    </div>
  );
}

export default SideContainer;

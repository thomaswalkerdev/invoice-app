import React from "react";
import "../../styles/sidebar.scss";
import LogoIcon from "../icons/logo-icon";
import ThemeIcon from "../icons/theme-icon";

export function Sidebar() {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar">
        <div className="sidebar__top-icon">
          <LogoIcon />
        </div>
        <div>
          <div className="sidebar__theme-icon-wrapper">
            <ThemeIcon height={50} width={50} />
          </div>
          <div className="sidebar__break-line"></div>
          <img
            className="sidebar__profile-picture"
            src={require("../../assets/image-avatar.jpg")}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

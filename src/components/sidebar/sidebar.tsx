import React from "react";
import "../../styles/sidebar.scss";
import LogoIcon from "../icons/logo-icon";
import ThemeIcon from "../icons/theme-icon";
import { useTheme } from "../../providers/theme-provider";
import { ThemeActions } from "../../actions/theme.actions";

export function Sidebar() {
  const { themeState, dispatch } = useTheme();
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar">
        <div className="sidebar__top-icon">
          <LogoIcon />
        </div>
        <div>
          <div className="sidebar__theme-icon-wrapper">
            <svg
              onClick={() => {
                dispatch({ type: ThemeActions.ToggleTheme });
              }}
            >
              <ThemeIcon height={50} width={50} />
            </svg>
          </div>
          <div className="sidebar__break-line"></div>
          <div className="sidebar__profile-picture-wrapper">
            <img
              className="sidebar__profile-picture"
              src={require("../../assets/image-avatar.jpg")}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

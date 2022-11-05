import React from "react";
import { Theme } from "../../enums/theme.enum";
import { useTheme } from "../../providers/theme-provider";

export function Layout({ children }: any) {
  const { themeState, dispatch } = useTheme();

  return (
    <div
      className={`${
        themeState.theme === Theme.Dark ? "App--dark" : "App--light"
      } App`}
    >
      {children}
    </div>
  );
}

export default Layout;

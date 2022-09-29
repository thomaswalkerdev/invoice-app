import * as React from "react";
import { ThemeActions } from "../actions/theme.actions";
import { Theme } from "../enums/theme.enum";

type Action = { type: ThemeActions };
type Dispatch = (action: Action) => void;
type State = { theme: Theme };
type ThemeProviderProps = { children: React.ReactNode };

const ThemeContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function themeReducer(state: State, action: Action) {
  switch (action.type) {
    case ThemeActions.ToggleTheme: {
      return { theme: state.theme === Theme.Dark ? Theme.Light : Theme.Dark };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = React.useReducer(themeReducer, {
    theme: Theme.Dark,
  });
  const value = { state, dispatch };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };

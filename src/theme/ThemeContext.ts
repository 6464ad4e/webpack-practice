import { createContext, Dispatch, SetStateAction } from "react";

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark' 
}

export interface ThemeContextProps {
  theme: Theme,
  setTheme: Dispatch<SetStateAction<Theme>>
}

const defaultContextValues: ThemeContextProps = {
  theme: Theme.LIGHT,
  setTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextProps>(defaultContextValues);
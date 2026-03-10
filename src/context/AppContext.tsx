import { createContext, useContext, useMemo } from "react";
import { THEME, type ThemeTokens } from "../lib/constants";
import type { SectionId } from "../app/components/nav-sidebar";

interface AppContextValue {
  darkMode: boolean;
  lang: "pl" | "en";
  theme: ThemeTokens;
  onOpenSection: (id: SectionId) => void;
}

const AppContext = createContext<AppContextValue | null>(null);
AppContext.displayName = "AppContext";

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppContextProvider");
  return ctx;
}

interface AppContextProviderProps {
  darkMode: boolean;
  lang: "pl" | "en";
  onOpenSection: (id: SectionId) => void;
  children: React.ReactNode;
}

export function AppContextProvider({ darkMode, lang, onOpenSection, children }: AppContextProviderProps) {
  const theme = useMemo<ThemeTokens>(() => (darkMode ? THEME.dark : THEME.light), [darkMode]);

  const value = useMemo<AppContextValue>(
    () => ({ darkMode, lang, theme, onOpenSection }),
    [darkMode, lang, theme, onOpenSection]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

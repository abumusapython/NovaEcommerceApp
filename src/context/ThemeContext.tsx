import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { useColorScheme } from "react-native";

import { Colors, ThemeMode } from "@/theme";

type ThemeContextValue = {
  mode: ThemeMode;
  colors: (typeof Colors)[ThemeMode];
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const systemScheme = useColorScheme();

  const [mode, setMode] = useState<ThemeMode>(
    systemScheme === "light" ? "light" : "dark",
  );

  const toggleTheme = () => {
    setMode((current) => (current === "dark" ? "light" : "dark"));
  };

  const value = useMemo(
    () => ({
      mode,
      colors: Colors[mode],
      toggleTheme,
    }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

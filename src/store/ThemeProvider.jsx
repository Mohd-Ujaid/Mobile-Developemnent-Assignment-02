import React, { createContext, useState } from "react";
import { useColorScheme } from "react-native";

const themes = {
  light: {
    background: "#FFFFFF",
    card: "#F5F5F5",
    text: "#131313ff",
    subtext: "#666666",
  },
  dark: {
    background: "hsla(0, 0%, 0%, 1.00)",
    card: "#1E1E1E",
    text: "#FFFFFF",
    subtext: "#AAAAAA",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemTheme === "dark");

  const theme = isDark ? themes.dark : themes.light;

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

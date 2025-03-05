import { createContext, useContext, useState, useEffect } from "react";
import darkTheme from "../../themes/dark";
import lightTheme from "../../themes/light";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "light"; // Get stored theme name, default to light
  const [theme, setTheme] = useState(storedTheme === "dark" ? darkTheme : lightTheme);

  useEffect(() => {
    document.body.style.background = theme.background;

    // Store only the theme name, not the object
    const themeName = theme === darkTheme ? "dark" : "light";
    if (localStorage.getItem("theme") !== themeName) {
      localStorage.setItem("theme", themeName);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

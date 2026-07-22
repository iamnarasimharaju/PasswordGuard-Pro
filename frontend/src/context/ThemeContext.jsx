import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(
    localStorage.getItem("pg_theme") || "dark"
  );

  useEffect(() => {

    document.body.setAttribute("data-theme", theme);

    localStorage.setItem("pg_theme", theme);

  }, [theme]);

  function toggleTheme() {

    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    );

  }

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>

  );

}
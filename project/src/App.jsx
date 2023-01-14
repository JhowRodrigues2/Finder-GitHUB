import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);
import GlobalStyle from "./GlobalStyles";
import { AppArea, Tittle, ToggleButtonArea } from "./Styles.jsx";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme}>
        <GlobalStyle />
        <ToggleButtonArea>
          <ReactSwitch
            checked={theme === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={toggleTheme}
          />
        </ToggleButtonArea>
        <AppArea>
          <Tittle>GitHub Finder</Tittle>
          <Outlet />
        </AppArea>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Current Theme: {theme}
    </button>
  );
};

export default ThemeButton;

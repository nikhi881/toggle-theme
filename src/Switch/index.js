import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={() => {
          {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }
        }}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;

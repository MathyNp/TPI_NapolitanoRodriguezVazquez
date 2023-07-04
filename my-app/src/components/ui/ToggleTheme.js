import React, { useContext, useEffect, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { ThemeContext } from "../Services/ThemeContext";
const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }, [theme, setTheme]);

  return (
    <>
      <div className="darklightButton">
        <FontAwesomeIcon
          icon={theme === "dark" ? faSun : faSun}
          className="iconDL"
          size="xl"
        />
        <label className="switch">
          <input
            type="checkbox"
            variant={theme === "dark" ? "light" : "dark"}
            onClick={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faMoon}
          size="xl"
          className="iconDL"
        />
      </div>
    </>
  );
};

export default ToggleTheme;

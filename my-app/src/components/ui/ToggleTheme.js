import React, { useContext } from "react";

import { ThemeContext } from "../Services/ThemeContext";
import { Button } from "react-bootstrap";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <Button
        type="checkbox"
        onClick={toggleTheme}
        variant={theme === "dark" ? "light" : "dark"}
      >
        GOLA
      </Button>
    </>
  );
};

export default ToggleTheme;

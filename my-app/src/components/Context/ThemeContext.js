import { createContext, useState } from "react";
export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
const [theme, setContextTheme] = useState('Light');

const toggleTheme = () => {
    if (theme === "light") {
        setContextTheme("dark");
    } else {
        setContextTheme("light");
    }
  };

return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)
}


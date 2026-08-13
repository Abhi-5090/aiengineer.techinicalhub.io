import { createContext, useContext, useEffect, useState, } from "react";
const ThemeContext = createContext(undefined);
const setCookie = (name, value, days) => {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
};
const getCookie = (name) => {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
};
export default function ThemeProvider({ children, }) {
    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        const savedTheme = getCookie("theme");
        const initialTheme = savedTheme === "light" || savedTheme === "dark"
            ? savedTheme
            : "dark";
        setTheme(initialTheme);
        document.documentElement.classList.add(initialTheme);
    }, []);
    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        setCookie("theme", theme, 30);
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };
    return (<ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>);
}
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return context;
};

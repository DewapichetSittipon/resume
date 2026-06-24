import { useState, useEffect } from "react";
import type { Language, Theme } from "./types";
import HomePage from "./pages/HomePage";

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const App = () => {
  const [language, setLanguage] = useState<Language>("EN");
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <HomePage language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />;
};

export default App;

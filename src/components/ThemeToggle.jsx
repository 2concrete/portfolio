import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.theme ||
      (window.matchMedia("prefers-color-scheme: dark").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    localStorage.theme = theme;
  }, [theme]);
  return (
    <button
      className="cursor-pointer text-neutral-900 hover:opacity-80 transition-all"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggle;

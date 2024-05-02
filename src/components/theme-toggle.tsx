import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [darkMode]);

  return (
    <Expand
      duration={1000}
      placeholder={undefined}
      className="scale-150 cursor-default"
      toggled={darkMode}
      toggle={setDarkMode}
    />
  );
}

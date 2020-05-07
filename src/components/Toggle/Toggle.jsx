import React from "react";
import "./Toggle.css";
import Icon from "../Icon/Icon";

function Toggle() {
  //optionally parse from localStorage
  const [theme, setTheme] = React.useState(getInitialMode());
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function getInitialMode() {
    const isReturningUser = "theme" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("theme"));
    const userPrefersDark = getPrefColorScheme();

    // if mode was saved -> dark / light
    if (isReturningUser) {
      return savedMode;
    }
    // if preffered color scheme is dark -> dark
    else if (userPrefersDark) {
      return "dark";
    } else {
      // otherwise -> light
      return "light";
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <button
      className="toggle-button"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <Icon />
    </button>
  );
}

export default Toggle;

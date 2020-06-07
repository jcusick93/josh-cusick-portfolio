import React from "react";
import "./Toggle.css";
import Icon from "../Icon/Icon";
setGlobalTheme(getInitialMode());
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
function setGlobalTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", JSON.stringify(theme));
}
function Toggle() {
  //optionally parse from localStorage
  const [theme, setTheme] = React.useState(getInitialMode());
  React.useEffect(() => {
    setGlobalTheme(theme);
  }, [theme]);
  const isDark = theme === "dark";

  return (
    <div class="container">
      <span>Dark Mode</span>
      <label id="switch" class="switch">
        <input
          checked={isDark}
          type="checkbox"
          onChange={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          id="slider"
        />

        <span class="slider round"></span>
      </label>
    </div>
  );
}
export default Toggle;

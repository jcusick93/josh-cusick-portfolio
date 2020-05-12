import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Toggle from "../Toggle/Toggle";

const NavBar = () => (
  <div className="nav-bar-container">
    <NavLink to="/" className="nav-logo">
      Josh Cusick
    </NavLink>
    <div className="nav-links-group">
      <NavLink to="/" className="nav-link">
        Projects
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <Toggle />
    </div>
  </div>
);

export { NavBar };

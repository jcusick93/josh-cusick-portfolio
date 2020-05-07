import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Toggle from "../Toggle/Toggle";

const NavBar = () => (
  <div className="nav-bar-container">
    <NavLink to="/" className="nav-logo">
      josh cusick
    </NavLink>
    <div className="nav-links-group">
      <NavLink to="/" className="nav-link">
        home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        about
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        contact
      </NavLink>

      <Toggle />
    </div>
  </div>
);

export { NavBar };

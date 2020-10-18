import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import Img1 from "../../Images/josh-emoji.png";

const NavBar = () => (
  <div id="nav-bar">
    <div className="nav-bar-inner">
      <NavLink to="/" className="nav-logo">
        <img className="nav-image" alt="emoji of Josh Cusick" src={Img1} />
      </NavLink>
      <div className="nav-links-group">
        <NavLink to="/" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/style-guide" className="nav-link">
          Styleguide
        </NavLink>

        <Toggle />
      </div>
    </div>
  </div>
);

export { NavBar };

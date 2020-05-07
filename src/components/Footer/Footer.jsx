import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <span>© 2020 designed & coded in React.js by yours truly</span>
    <div className="social-container">
      <a className="social-link" href="/">
        LinkedIn
      </a>
      <a className="social-link" href="/">
        Medium
      </a>
      <a className="social-link" href="/">
        Dribbble
      </a>
      <a className="social-link" href="/">
        GitHub
      </a>
    </div>
  </div>
);

export default Footer;

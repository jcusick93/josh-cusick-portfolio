import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="status-copyright-container">
      <a
        href="https://app.netlify.com/sites/josh-cusick-portfolio/deploys"
        className="status-container"
      >
        <img
          alt="status badge"
          src="https://api.netlify.com/api/v1/badges/71d93d8c-14d1-421c-ac33-4c8a76636e1c/deploy-status"
        />
      </a>

      <span>© 2020 Josh Cusick 💅🏻 in Figma + 🛠 in React</span>
    </div>

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

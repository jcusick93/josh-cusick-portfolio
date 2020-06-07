import React from "react";
import "./StyleGuide.css";

const StyleGuidePage = (props) => (
  <div>
    <h1>Style Guide</h1>
    <h3>
      <span role="img" aria-label="book">
        📖
      </span>{" "}
      Typography
    </h3>
    <h1>The quick brown fox jumps over the lazy dog</h1>
    <h2>The quick brown fox jumps over the lazy dog</h2>
    <h3>The quick brown fox jumps over the lazy dog</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <a href="./">Text Link</a>
    <h3 style={{ marginTop: 64 }}>🌈 Colors</h3>
    <div className="variable-container">
      <div style={{ backgroundColor: "var(--primary)" }} className="swatch" />
      <span>--primary</span>
    </div>
    <div className="variable-container">
      <div
        style={{ backgroundColor: "var(--primary-lighter)" }}
        className="swatch"
      />
      <span>--primary-lighter</span>
    </div>
    <div className="variable-container">
      <div
        style={{ backgroundColor: "var(--primary-darker)" }}
        className="swatch"
      />
      <span>--primary-darker</span>
    </div>
    <div className="variable-container">
      <div
        style={{ backgroundColor: "var(--on-primary)" }}
        className="swatch"
      />
      <span>--on-primary</span>
    </div>
    <div className="variable-container">
      <div style={{ backgroundColor: "var(--text-hc)" }} className="swatch" />
      <span>--text-hc</span>
    </div>
    <div className="variable-container">
      <div style={{ backgroundColor: "var(--text-lc)" }} className="swatch" />
      <span>--text-lc</span>
    </div>
    <div className="variable-container">
      <div style={{ backgroundColor: "var(--text-vlc)" }} className="swatch" />
      <span>--text-vlc</span>
    </div>
    <div className="variable-container">
      <div style={{ backgroundColor: "var(--lines)" }} className="swatch" />
      <span>--lines</span>
    </div>
    <div className="variable-container">
      <div
        style={{ backgroundColor: "var(--surface-00)" }}
        className="swatch"
      />

      <span>--surface-00</span>
    </div>
    <div className="variable-container">
      <div
        style={{ backgroundColor: "var(--surface-01)" }}
        className="swatch"
      />
      <span>--surface-01</span>
    </div>
    <div className="variable-container">
      <div
        style={{ backgroundColor: "var(--surface-02)" }}
        className="swatch"
      />
      <span>--surface-02</span>
    </div>
    <div className="variable-container">
      <div
        style={{ backgroundColor: "var(--surface-03)" }}
        className="swatch"
      />
      <span>--surface-03</span>
    </div>

    <h3 style={{ marginTop: 64 }}>✈️ Elevation</h3>
    <div className="variable-container">
      <div style={{ boxShadow: "var(--elevation-01)" }} className="swatch" />
      <span>--elevation-01</span>
    </div>
    <div className="variable-container">
      <div style={{ boxShadow: "var(--elevation-02)" }} className="swatch" />
      <span>--elevation-02</span>
    </div>
    <div className="variable-container">
      <div style={{ boxShadow: "var(--elevation-03)" }} className="swatch" />
      <span>--elevation-03</span>
    </div>
    <div className="variable-container">
      <div style={{ boxShadow: "var(--elevation-04)" }} className="swatch" />
      <span>--elevation-04</span>
    </div>
  </div>
);

export default StyleGuidePage;

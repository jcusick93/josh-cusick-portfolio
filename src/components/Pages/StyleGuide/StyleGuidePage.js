import React from "react";
import "./StyleGuide.css";

const StyleGuidePage = (props) => (
  <div>
    <h1>Style Guide</h1>
    <h3>📖 Typography</h3>
    <h1>The quick brown fox jumps over the lazy dog</h1>
    <h2>The quick brown fox jumps over the lazy dog</h2>
    <h3>The quick brown fox jumps over the lazy dog</h3>
    <p>The quick brown fox jumps over the lazy dog</p>
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

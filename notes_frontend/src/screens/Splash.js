import React from "react";
import "./Splash.css";

/**
 * Splash Screen
 * Design mapping to tokens:
 * - Background: var(--color-surface)
 * - Logo circle: var(--color-brand) with radius 80 (mapped to var(--radius-80) equivalent -> 80px via fixed size)
 * - Title: var(--font-50/--font-30 variants), here using --font-30-semi-line45 equivalent in design-system as --font-30-semi-line45
 * - Subtitle: --font-16-regular-line24 with neutral-50 color
 * - Primary CTA: --btn-primary tokens
 */
const Splash = ({ onGetStarted }) => {
  return (
    <div className="splash-page">
      <div className="splash-content">
        <div className="logo-mark" aria-hidden="true">
          <div className="logo-dot" />
        </div>
        <h1 className="splash-title">Notes</h1>
        <p className="splash-subtitle">Organize your ideas effortlessly</p>
        <button
          type="button"
          className="btn-primary splash-cta"
          onClick={onGetStarted}
        >
          Get Started
        </button>
      </div>
      <div className="splash-footer">
        <span className="footer-text">v1.0</span>
      </div>
    </div>
  );
};

export default Splash;

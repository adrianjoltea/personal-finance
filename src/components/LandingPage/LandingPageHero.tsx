import React from "react";

export default function LandingPageHero() {
  return (
    <div className="landing-page-hero">
      <div className="landing-page-hero-text">
        <h1>Personal Finance</h1>
        <span className="landing-page-divider"></span>
        <span>
          Efficiently track your expenses, manage your investments, and create
          personalized cards with ease
        </span>
      </div>
      <a href="#features" className="btn landing-page-btn">
        Explore
      </a>
    </div>
  );
}

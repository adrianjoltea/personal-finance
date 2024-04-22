import React from "react";
import LandingPageHero from "../components/LandingPage/LandingPageHero";
import LandingPageFeatures from "../components/LandingPage/LandingPageFeatures";
import LandingPageLogin from "../components/LandingPage/LandingPageLogin";
import LandingPageGallery from "../components/LandingPage/LandingPageGallery";
import LandingPageFooter from "../components/LandingPage/LandingPageFooter";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <LandingPageHero />
      <LandingPageFeatures />
      <LandingPageGallery />
      <LandingPageLogin />
      <LandingPageFooter />
    </div>
  );
}

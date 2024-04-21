import React from "react";
import { Link } from "react-router-dom";

function LandingPageLogin() {
  return (
    <div className="landing-page-login">
      <Link to={"/login"} className="btn landing-page-btn">
        Log in
      </Link>
    </div>
  );
}

export default LandingPageLogin;

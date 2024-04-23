import { Link } from "react-router-dom";

function LandingPageLogin() {
  return (
    <div className="landing-page-login">
      <h2>Login for a beta test of the application</h2>
      <Link to={"/login"} className="btn landing-page-btn">
        Log in
      </Link>
    </div>
  );
}

export default LandingPageLogin;

import React, { useState } from "react";
import SignInForm from "../components/Login/SignInForm";
import LoginForm from "../components/Login/LoginForm";

export default function Login() {
  const [signIn, setSignin] = useState(false);

  return (
    <div className="login-container">
      <div>
        <h2>{signIn ? "Sign in" : "Log in"} to your account</h2>
        {signIn ? <SignInForm /> : <LoginForm />}
        <div className="login-container-text">
          {/* <p>{signIn ? "Already a user" : "Create an account"} </p> */}
          <button
            onClick={() => setSignin(oposite => !oposite)}
            className="btn"
          >
            {signIn ? "Log in" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}

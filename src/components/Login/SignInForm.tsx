import React, { useState } from "react";
import Input from "../Ui/Input";
import { useSignIn } from "./hooks/useSignIn";

export default function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const { signIn } = useSignIn();
  const submitData = {
    username,
    password,
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    signIn(submitData);
  }
  return (
    <>
      <form className="login-form" onSubmit={e => handleSubmit(e)}>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          content="Username"
          placeholder="Enter your username"
        />

        <Input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          content="Password"
          placeholder="Enter your password"
        />

        <Input
          type="password"
          id="current-password"
          autoComplete="current-password"
          value={currentPassword}
          onChange={e => setCurrentPassword(e.target.value)}
          content="Repeat password"
          placeholder="Repeat your password"
        />

        <div className="login-form-container">
          <button className="btn btn-login">Sign in</button>
        </div>
      </form>
    </>
  );
}

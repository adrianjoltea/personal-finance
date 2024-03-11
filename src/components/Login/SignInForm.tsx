import React, { useState } from "react";
import Input from "../ui/Input";

import Register from "./useRegister";
import toast from "react-hot-toast";

export default function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const submitData = {
    username,
    password,
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const isAuthenticated = await Register(submitData);

      if (isAuthenticated) {
        toast.success("Please move to the login page");
      } else {
        // Handle authentication failure
        toast.error("Authentication failed. Please check your credentials.", {
          className: "toast",
        });
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      console.error(error);
      toast.error("An error occurred. Please try again later.", {
        className: "toast",
      });
    }
  }
  return (
    <>
      <form className="login-form" onSubmit={e => handleSubmit(e)}>
        <Input
          type="text"
          id="username"
          // className="login-form-container-input"
          value={username}
          onChange={e => setUsername(e.target.value)}
          content="Username"
          placeholder="Enter your username"
        />

        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          // className="login-form-container-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          content="Password"
          placeholder="Enter your password"
        />

        <Input
          type="password"
          id="current-password"
          autoComplete="current-password"
          // className="login-form-container-input"
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

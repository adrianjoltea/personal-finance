import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";

import toast from "react-hot-toast";
import Login from "./useLogin";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const submitData = {
    username,
    password,
  };

  function handleShowPassword() {
    setShowPassword(pass => !pass);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please complete all the form elements", {
        className: "toast",
      });
      return;
    }

    const { isAuthenticated } = await Login(submitData);

    if (!isAuthenticated)
      toast.error("Please use some valid data", {
        className: "toast",
      });
    if (isAuthenticated) navigate("/");
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          id="username"
          name="username"
          autoComplete="email"
          placeholder="Enter your email"
          // className="login-form-container-input"
          value={username}
          onChange={e => setUsername(e.target.value)}
          content="Username"
        />

        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="curent-password"
          // className="login-form-container-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          content="Password"
          placeholder="Enter your password"
          forPassword={true}
          handleShow={handleShowPassword}
          showPassword={showPassword}
        />
        <div className="login-form-container">
          <button
            className={`btn btn-login ${username && password && "active"}`}
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
}

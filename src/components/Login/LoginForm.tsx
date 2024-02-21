import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";

import toast from "react-hot-toast";
import Login from "./useLogin";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const submitData = {
    email,
    password,
  };

  function handleShowPassword() {
    setShowPassword(pass => !pass);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please complete all the form elements", {
        className: "toast",
      });
      return;
    }

    const isAuthenticated = await Login(submitData);
    if (isAuthenticated) navigate("/");
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email"
          // className="login-form-container-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          content="Email address"
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
          <button className={`btn btn-login ${email && password && "active"}`}>
            Log in
          </button>
        </div>
      </form>
    </>
  );
}

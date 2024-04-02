import React, { useState } from "react";

import Input from "../Ui/Input";

import toast from "react-hot-toast";
import { useLogin } from "./hooks/useLogin";

export default function LoginForm() {
  const [username, setUsername] = useState("AdrianJoltea");
  const [password, setPassword] = useState("123");

  const [showPassword, setShowPassword] = useState(false);

  const { login } = useLogin();
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
    login(submitData, {
      onSettled: () => {
        setUsername(""), setPassword("");
      },
    });
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          id="username"
          name="username"
          autoComplete="email"
          placeholder="Enter your username"
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

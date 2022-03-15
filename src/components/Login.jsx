import React, { useState } from "react";
import { fetchLogin } from "../api";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  token,
  setToken,
  hasUser,
  setHasUser,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userProfile = await fetchLogin(e.target[0].value, e.target[1].value),
      token = await userProfile.data.token;
    let localToken = localStorage.setItem("token", token);
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const hasAUser = (e) => {
    setHasUser(false);
    console.log("test");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={handleUsername}
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={handlePassword}
        ></input>
        <button type="submit">Submit</button>
        <p onClick={hasAUser}>Make New Account</p>
      </form>
    </div>
  );
};

export default Login;

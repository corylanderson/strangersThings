import React, { useState } from "react";
import { fetchLogin } from "../api";
import { Link } from "react-router-dom";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  token,
  setToken,
  hasUser,
  setHasUser,
  setIsLoggedIn,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userProfile = await fetchLogin(e.target[0].value, e.target[1].value),
      token = await userProfile.data.token;
    let localToken = localStorage.setItem("token", token);
    const getToken = localStorage.getItem("token");
    setToken(getToken);
    setIsLoggedIn(true);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
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
        <Link to="./createUser">Make New Account</Link>
      </form>
    </div>
  );
};

export default Login;

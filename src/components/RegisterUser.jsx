import React, { useState } from "react";
import { fetchRegisterUser } from "../api";
import { Link } from "react-router-dom";

const RegisterUser = ({
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
    const userProfile = await fetchRegisterUser(
      e.target[0].value,
      e.target[1].value
    );
    console.log(userProfile);
    let storageToken = await userProfile.data.token;
    console.log(storageToken, "from inside registerUser");
    localStorage.setItem("token", storageToken);
    setToken(localStorage.getItem("token"));
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
        <button type="submit">Create User</button>
        <Link to="./login">Already have a Login?</Link>
      </form>
    </div>
  );
};

export default RegisterUser;

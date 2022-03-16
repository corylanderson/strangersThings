import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="posts">Posts</NavLink>
      <span> </span>
      <NavLink to="profile">Profile</NavLink>
      <span> </span>
      {localStorage.getItem("token") ? null : (
        <NavLink to="login">Login</NavLink>
      )}
    </div>
  );
};

export default Navbar;

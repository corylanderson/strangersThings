import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="posts">
        <Posts />
      </NavLink>

      <NavLink to="profile">
        <Profile />
      </NavLink>
    </div>
  );
};

export default Navbar;

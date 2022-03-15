import React from "react";
import { fetchUserProfile } from "../api";

const Profile = () => {
  async () => {
    const results = await fetchUserProfile();
    console.log(results.data);
  };

  return <div>User Profile</div>;
};

export default Profile;

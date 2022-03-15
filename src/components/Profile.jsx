import React, { useState, useEffect } from "react";


const Profile = ({ token, setToken, profile, setProfile}) => {
  console.log(token, "top level profile");

  console.log(profile);
  return (
    <div>
      {profile.messages.length > 0
        ? profile.messages.map((message) => {
            return
            <div>{message}</div>
          })
        : <p>No messages</p>}

      {profile.posts.length > 0
        ? profile.posts.map((post) => {
            return
            <div>{post}</div>
          })
        : <p>No Posts</p>}
    </div>
  );
};

export default Profile;

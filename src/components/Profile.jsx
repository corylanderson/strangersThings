import React from "react";
import { fetchUserProfile } from "../api";

const Profile = ({ token, setToken }) => {
  console.log(token, "top level profile");
  const profileResult = async () => {
    const results = await fetchUserProfile(token);
    console.log(results);
    let userMessages = await results.data.messages;
    let userPosts = await results.data.posts;
    console.log(results, "this is results from profile");
  };
  profileResult();
  console.log("profile");
  return (
    <div>
      {/* {userMessages.length
        ? userMessages.map((message) => {
            return;
            (<div>{message}</div>), (<div></div>), (<div></div>);
          })
        : null}

      {userPosts.length
        ? userPosts.map((post) => {
            return;
            <div>{post}</div>;
          })
        : null} */}
    </div>
  );
};

export default Profile;

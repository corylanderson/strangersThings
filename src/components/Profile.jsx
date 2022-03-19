import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = ({ token, setToken, profile, setProfile }) => {
  return (
    <div>
      {profile && profile.messages.length > 0 ? (
        profile.messages.map((message) => {
          return;
          <div>{message}</div>;
        })
      ) : (
        <p>No messages</p>
      )}

      {profile && profile.posts.length > 0 ? (
        profile.posts.map((post) => {
          return (
            <>
              <div key={post._id}>
                <h2>{post.title}</h2>
                <h4>Description: {post.description}</h4>
                <h4>Price :{post.price}</h4>
                <h4>Location: {post.location}</h4>
              </div>
              <Link to={{ pathname: "/editPost", state: { post: post } }}>
                <button value={post._id} type="submit">
                  Edit Post
                </button>
              </Link>
              <button type="submit">Delete Post</button>
            </>
          );
        })
      ) : (
        <p>No Posts</p>
      )}
    </div>
  );
};

export default Profile;

import React, { useState, useEffect } from "react";
import { fetchPostings, deletePost } from "../api";
import { Link } from "react-router-dom";

const Posts = ({
  postings,
  setPostings,
  profile,
  setProfile,
  filteredPosts,
}) => {
  useEffect(() => {
    const getPosts = async () => {
      const results = await fetchPostings();
      setPostings(results.data.posts);
    };
    getPosts();
  }, []);

  // const showCreatePostPage = (e) => {
  // e.preventDefault()

  // return (<Route
  //   CreatePosts />)
  // }
  const deletingPosts = async (e) => {
    const result = await deletePost(
      localStorage.getItem("token"),
      e.target.value
    );
    const results = await fetchPostings();
    setPostings(results.data.posts);
  };
  return (
    <div id="postMain">
      <Link to="createPost">
        <button type="submit">Create Post</button>
      </Link>
      {filteredPosts.map((posting) => {
        return (
          <div className="post" key={posting._id}>
            <h2>{posting.title}</h2>
            <h4>Description: {posting.description}</h4>
            <h4>Price :{posting.price}</h4>
            <h4>Location: {posting.location}</h4>

            {posting.author._id !== profile._id ? null : (
              <Link to={{ pathname: "/editPost", state: { post: posting } }}>
                <button value={posting._id} type="submit">
                  Edit Post
                </button>
              </Link>
            )}
            {posting.author._id !== profile._id ? null : (
              <button value={posting._id} type="submit" onClick={deletingPosts}>
                Delete Post
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

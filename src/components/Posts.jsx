import React, { useState, useEffect } from "react";
import { fetchPostings } from "../api";
import { CreatePosts } from "./";
import { Link } from "react-router-dom";

const Posts = ({ postings, setPostings }) => {
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
  return (
    <div>
      <Link to="createPost">
        <button type="submit">Create Post</button>{" "}
      </Link>
      {postings.map((posting) => {
        return (
          <div key={posting._id}>
            <h2>{posting.title}</h2>
            <h4>Description: {posting.description}</h4>
            <h4>Price :{posting.price}</h4>
            <h4>Location: {posting.location}</h4>
            <button type="submit">Edit Post</button>
            <button type="submit">Delete Post</button>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

import React, { useState, useEffect } from "react";
import { fetchPostings } from "../api";

const Posts = ({ postings, setPostings }) => {
  useEffect(() => {
    const getPosts = async () => {
      const results = await fetchPostings();
      setPostings(results.data.posts);
    };
    getPosts();
  }, []);

  return (
    <div>
      {postings.map((posting) => {
        return (
          <div key={posting._id}>
            <h2>{posting.title}</h2>
            <h4>Description: {posting.description}</h4>
            <h4>Price :{posting.price}</h4>
            <h4>Location: {posting.location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

import React, { useState } from "react";
import { fetchPostings } from "../api";
const Posts = () => {
  const [postings, setPostings] = useState([]);

  fetchPostings();

  return (
    <div>
      <h2>Posts</h2>
      {postings.map((posting) => {
        <div key={posting._id}>
          <h3>{posting.title}</h3>
          <h3>{posting.description}</h3>
          <h3>{posting.price}</h3>
          <h3>{posting.location}</h3>
        </div>;
      })}
    </div>
  );
};

export default Posts;

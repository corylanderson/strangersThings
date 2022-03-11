import React, { useState } from "react";
// import Posts from "./Posts";
import { fetchPostings } from "../api";

const Main = () => {
  const [postings, setPostings] = useState([]);

  fetchPostings();

  return (
    <div>
      <h1>Stranger's Things</h1>
      <div>
        <h2>Posts</h2>
        {/* {postings.map((posting) => {
          <div key={posting._id}>
            <h3>{posting.title}</h3>
            <h3>{posting.description}</h3>
            <h3>{posting.price}</h3>
            <h3>{posting.location}</h3>
          </div>; */}
        {/* })} */}
      </div>
    </div>
  );
};

export default Main;
